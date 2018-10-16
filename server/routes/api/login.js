const User = require("../../models/User");
const UserSession = require("../../models/UserSession");
const {performance} = require("perf_hooks");

module.exports = app => {
  /*
   * Sign up
   */
  app.post("/api/account/signup", (req, res, next) => {
    const { body } = req;
    const { firstName, lastName, password, address, phone, errors } = body;

    let { email } = body;

    if (errors) {
      return res.json({
        success: false,
        message: "Error:invalid login."
      });
    }
    if (!firstName) {
      return res.json({
        success: false,
        message: "Error: firstName cannot be blank."
      });
    }

    if (!lastName) {
      return res.json({
        success: false,
        message: "Error: lastName cannot be blank."
      });
    }

    if (!email) {
      return res.json({
        success: false,
        message: "Error: Email cannot be blank."
      });
    }
    if (!password) {
      return res.json({
        success: false,
        message: "Error: Password cannot be blank."
      });
    }
    if (!address) {
      return res.json({
        success: false,
        message: "Error: Address cannot be blank."
      });
    }
    if (!phone) {
      return res.json({
        success: false,
        message: "Error: Phone cannot be blank."
      });
    }

    //lowcase and trim the email
    email = email.toLowerCase();
    email = email.trim();

    // Save the new user
    const newUser = new User();
    newUser.email = email;
    newUser.lastName = lastName;
    newUser.firstName = firstName;
    newUser.address = address;
    //password need be hashed || use user model function to hash the password built by bcrypt
    newUser.password = newUser.generateHash(password);
    newUser.phone = phone;
    newUser.save((err, user) => {
      if (err) {
            //becasue the email is unique, if the email is existing, error will be existing
            return res.json({
                success: false,
                message: "Email is already existing"
            });
      }
      //no error, report success
      return res.json({
        success: true,
        message: "Signed up"
      });
    });

  //check the performance
  console.log(performance.now());
  }); // end of sign up endpoint


  /*
  * sign in
  * */
  app.post("/api/account/signin", (req, res, next) => {
    const { body } = req;
    const { password } = body;

    let { email } = body;

    if (!email) {
      return res.json({
        success: false,
        message: "Error: Email cannot be blank."
      });
    }
    if (!password) {
      return res.json({
        success: false,
        message: "Error: Password cannot be blank."
      });
    }

    email = email.toLowerCase();
    email = email.trim();

    //find email
    User.find(
      {
        email: email
      },
      (err, users) => {
        if (err) {
          return res.json({
            success: false,
            message: "Error: Server error"
          });
        }
        //find zero users
        if (users.length != 1) {
          return res.json({
            success: false,
            message: "Error Invalid"
          });
        }
        const user = users[0];
        //password has been hashed use user model function to check the password built by bcrypt
        if (!user.validPassword(password)) {
          return res.json({
            success: false,
            message: "Error Invalid"
          });
        }

        //all goods save the correct user
        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
          if (err) {
            console.log(err);
            return res.json({
              success: false,
              message: "Error: server error"
            });
          }
          return res.json({
            success: true,
            message: "Valid sign in",
            token: doc._id //points back userID
          });
        });
      }
    );
  });

  /*
  * verify the users
  * validate the user’s session token every time they want to perform an action
  * */
  app.get("/api/account/verify", (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test

    // Verify the token is one of a kind and it's not deleted.
    UserSession.find(
      {
        _id: token,
        isDeleted: false
      },
      (err, sessions) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            message: "Error: Server error"
          });
        }
        if (sessions.length != 1) {
          return res.json({
            success: false,
            message: "Error: Invalid"
          });
        } else {
          // DO ACTION
          return res.json({
            success: true,
            message: "Good"
          });
        }
      }
    );
  });

  /*
  * logout
  * set UserSession to deleted
  * */
  app.get("/api/account/logout", (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    UserSession.findOneAndUpdate(
      {
        _id: token,
        isDeleted: false
      },
      {
        $set: {
          isDeleted: true
        }
      },
      null,
      (err, sessions) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            message: "Error: Server error"
          });
        }
        return res.json({
          success: true,
          message: "Good"
        });
      }
    );
  });
};
