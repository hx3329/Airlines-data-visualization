import {Stroke, Style} from "ol/style";

const editStyle ={
    plane:'',
    col:'',
    style:'',

    //find plane SVG picture with plane type
    findPlane(e){
        let plane;
        switch (e) {
            default:
            case "A330-203":
                plane =
                    "M166.113,84.29l-58.046-31.462V18.11c0-10.138-7.94-17.885-18.68-18.105L89.067,0v0.004c-11,0.201-20,8.29-20,18.106v35.26\n" +
                    "\tL12.022,84.289c-1.74,0.941-2.955,3.06-2.955,5.15v9.523c0,2.287,1.754,4.079,3.994,4.079c0.347,0,0.699-0.043,1.048-0.129\n" +
                    "\tl54.958-13.566v61.65l-14.468,11.895c-1.422,1.163-1.532,3.025-1.532,3.569v8.402c0,1.865,1.323,3.271,3.077,3.271\n" +
                    "\tc0.295,0,0.595-0.042,0.894-0.123l32.029-8.759l32.031,8.759c0.297,0.081,0.598,0.123,0.893,0.123c1.754,0,3.077-1.406,3.077-3.271\n" +
                    "\tv-8.402c0-0.543-0.11-2.406-1.527-3.564l-15.473-12.722V89.099l55.961,13.814c0.346,0.085,0.698,0.128,1.045,0.128\n" +
                    "\tc2.239,0,3.994-1.792,3.994-4.079v-9.523C169.067,87.349,167.851,85.23,166.113,84.29z";
                break;
            case "B737-3B7":
                plane =
                    "M164.221,94.237L152.859,85.8c0.003-0.343,0.002-0.689-0.003-1.04c-0.443-32.43-4.264-36.802-7.974-36.802\n" +
                    "\tc-3.378,0-6.589,3.427-7.616,26.263l-7.888-5.857c-0.836-26.611-4.38-30.406-7.829-30.406c-2.998,0-5.863,2.7-7.189,19.254\n" +
                    "\tl-6.175-4.586c0.919-14.347,1.44-24.236,1.45-24.419l0.003-0.131C109.638,18.215,101.993,0,91.099,0h-0.493\n" +
                    "\tC79.712,0,72.067,18.215,72.067,28.076l0.003,0.131c0.01,0.182,0.521,9.886,1.424,24.01l-7.329,5.396\n" +
                    "\tc-1.312-16.911-4.204-19.655-7.25-19.655c-3.437,0-6.995,3.821-7.811,30.742l-7.864,5.789C42.226,51.409,39,47.958,35.582,47.958\n" +
                    "\tc-3.68,0-7.5,4.372-7.943,36.801c-0.006,0.411-0.005,0.815,0,1.215l-11.221,8.26c-1.416,1.047-2.85,3.169-2.85,5.198v6.913\n" +
                    "\tc0,2.287,1.857,4.078,4.229,4.078c0.356,0,0.713-0.043,1.059-0.128l56.788-13.944c0.365-0.09,0.709-0.238,1.042-0.409\n" +
                    "\tc0.03,0.352,0.058,0.704,0.088,1.056c1.69,19.999,3.411,35.946,5.117,47.396c0.044,0.296,0.088,0.576,0.131,0.865l-24.655,20.101\n" +
                    "\tc-0.896,0.733-1.8,2.122-1.8,3.568v7.933c0,1.804,1.49,3.271,3.323,3.271c0.306,0,0.611-0.041,0.907-0.122l30.77-8.377l30.769,8.377\n" +
                    "\tc0.296,0.081,0.602,0.122,0.907,0.122c1.833,0,3.323-1.468,3.323-3.271v-7.933c0-1.446-0.904-2.835-1.804-3.571l-24.143-19.683\n" +
                    "\tc0.065-0.422,0.129-0.842,0.194-1.28c1.706-11.45,3.427-27.397,5.117-47.396c0.021-0.244,0.041-0.489,0.061-0.733\n" +
                    "\tc0.083,0.026,0.161,0.064,0.246,0.085l56.538,13.944c0.347,0.085,0.693,0.128,1.031,0.128c2.178,0,3.758-1.715,3.758-4.078v-6.913\n" +
                    "\tC166.567,97.836,165.952,95.517,164.221,94.237z M102.651,32.815c-0.064,1.265-0.99,1.737-1.567,0.244\n" +
                    "\tC98.987,27.634,95.271,23,91.035,23H90.67c-4.162,0-7.822,4.503-9.938,9.822c-0.63,1.584-1.626,0.869-1.692-0.455\n" +
                    "\tc-0.151-3.018-0.231-4.644-0.231-4.644C78.809,21.173,84.12,9,90.67,9h0.365c6.551,0,11.861,12.306,11.861,18.857\n" +
                    "\tC102.896,27.857,102.812,29.626,102.651,32.815z";
                break;
            case "B737-476":
                plane =
                    "M167.222,96.098l-27.76-21.534c0.891-1.483,1.413-3.212,1.413-5.064c0-5.445-4.43-9.875-9.875-9.875\n" +
                    "\tc-2.741,0-5.223,1.124-7.014,2.934l-12.692-9.846c0.811-14.536,1.267-24.328,1.276-24.522l0.002-0.115\n" +
                    "\tc0-9.862-7.646-28.076-18.54-28.076H93.54C82.646,0,75,18.214,75,28.076l0.002,0.115c0.009,0.192,0.456,9.797,1.252,24.092\n" +
                    "\tl-14.486,11.14c-1.809-2.308-4.615-3.798-7.768-3.798c-5.445,0-9.875,4.43-9.875,9.875c0,2.234,0.754,4.289,2.009,5.946\n" +
                    "\tL19.283,96.094c-1.383,1.067-2.783,3.197-2.783,5.201v4.913c0,2.287,1.858,4.079,4.229,4.079c0.357,0,0.713-0.043,1.059-0.128\n" +
                    "\tl56.787-13.944c0.142-0.035,0.276-0.094,0.413-0.142c0.231,3.288,0.469,6.597,0.716,9.902c1.181,15.807,2.377,29.364,3.572,40.517\n" +
                    "\tl-22.976,18.732c-0.896,0.733-1.801,2.121-1.801,3.569v7.933c0,1.834,1.459,3.271,3.322,3.271c0,0,0,0,0,0\n" +
                    "\tc0.306,0,0.611-0.041,0.908-0.122l24.248-6.601C89.249,184.843,91.265,186,93.54,186h0.493c2.265,0,4.273-1.147,6.532-12.58\n" +
                    "\tl23.706,6.454c0.296,0.081,0.602,0.122,0.908,0.122c1.832,0,3.322-1.467,3.322-3.271v-7.933c0-1.448-0.905-2.835-1.804-3.571\n" +
                    "\tl-22.447-18.302c1.211-11.235,2.423-24.934,3.619-40.945c0.241-3.226,0.474-6.454,0.699-9.664l56.144,13.848\n" +
                    "\tc0.347,0.085,0.694,0.128,1.032,0.128c2.177,0,3.758-1.715,3.758-4.079v-4.913C169.5,99.709,168.902,97.395,167.222,96.098z\n" +
                    "\t M105.584,32.711c-0.064,1.265-0.99,1.771-1.567,0.278C101.92,27.565,98.204,23,93.968,23h-0.365c-4.162,0-7.822,4.451-9.938,9.771\n" +
                    "\tc-0.63,1.584-1.626,0.817-1.692-0.507c-0.151-3.018-0.231-4.609-0.231-4.609C81.742,21.104,87.053,9,93.604,9h0.365\n" +
                    "\tc6.551,0,11.861,12.255,11.861,18.805C105.829,27.805,105.745,29.523,105.584,32.711z";
                break;
            case "A320-232":
                plane =
                    "M171.485,104.327l-26.04-19.089c1.138-1.565,1.821-3.483,1.821-5.561c0-5.23-4.254-9.485-9.484-9.485\n" +
                    "\tc-2.591,0-4.941,1.047-6.654,2.737c0.655-1.288,1.032-2.74,1.032-4.281c0-5.23-4.255-9.485-9.486-9.485\n" +
                    "\tc-3.105,0-5.685,1.507-7.417,3.82l-10.151-7.566V23.962c0-4.575-4.23-23.962-12-23.962s-12,19.387-12,23.962v31.454L70.39,63.397\n" +
                    "\tc-1.702-2.55-4.517-4.235-7.807-4.235c-5.23,0-9.443,4.255-9.443,9.485c0,1.541,0.399,2.993,1.054,4.281\n" +
                    "\tc-1.714-1.69-4.053-2.737-6.644-2.737c-5.23,0-9.48,4.255-9.48,9.485c0,2.262,0.801,4.341,2.128,5.973l-25.47,18.677\n" +
                    "\tc-1.527,1.12-2.621,3.307-2.621,5.199v13.6c0,2.167,1.522,3.802,3.56,3.802c0.615,0,1.224-0.149,1.821-0.444l49.016-23.963\n" +
                    "\tc0.641-0.316,1.968-0.396,2.683-0.396h11.921v56.479c0,0.013,0.176,0.032,0.176,0.046c-0.143,0.146-0.19,0.293-0.302,0.437\n" +
                    "\tl-7.97,10.375c-0.733,0.938-1.131,2.437-1,3.641l1.083,9.896c0.172,1.594,1.388,2.751,2.883,2.751c0.799,0,1.58-0.339,2.193-0.954\n" +
                    "\tl8.554-8.597c0.028-0.014,0.065-0.074,0.095-0.074h0.024c3.404,10,4.507,10.089,6.263,10.089c1.781,0,2.896-0.461,6.287-10.02\n" +
                    "\tl8.567,8.609c0.617,0.616,1.147,0.96,2.147,0.961v0.002c2,0,2.748-1.152,2.921-2.742l1.096-9.872\n" +
                    "\tc0.131-1.212-0.287-2.763-1.002-3.68l-8.022-10.394c-0.102-0.131-0.045-0.264-0.174-0.397c0.001-0.024,0.181-0.054,0.181-0.075\n" +
                    "\tv-56.479h11.921c0.715,0,2.045,0.079,2.687,0.396l49.017,24.077c0.598,0.296,1.2,0.387,1.815,0.387c2.037,0,3.56-1.693,3.56-3.86\n" +
                    "\tv-13.6C174.107,107.634,173.012,105.447,171.485,104.327z";
                break;
            case "A320-242":
                plane =
                    "M170.122,81.41L142.5,72.415V65.5c0-3.584-2.916-6.5-6.5-6.5h-6c-3.584,0-6.5,2.916-6.5,6.5v0.727l-16.938-5.516\n" +
                    "\tc0.281-4.464,0.465-7.142,0.473-7.257l0.006-0.173C107.041,52.748,106.392,0,91.94,0h-0.548c-14.451,0-15.1,52.704-15.1,53.236\n" +
                    "\tl0.006,0.178c0.008,0.111,0.192,2.725,0.471,7.11L59.5,66.123V65.5c0-3.584-2.916-6.5-6.5-6.5h-6c-3.584,0-6.5,2.916-6.5,6.5v6.783\n" +
                    "\tl-28.152,9.126C10.457,82.024,8.5,84.061,8.5,86.405v6.487c0,2.458,2.276,4.535,4.875,4.396l65.217-3.313\n" +
                    "\tc0.645,14.355,1.175,30.434,1.175,44.544c0,6.024,0.782,13.485,2.101,20.32l-20.697,5.644c-2.662,0.737-4.669,3.407-4.669,6.21v5.63\n" +
                    "\tc0,3.13,2.418,5.677,5.392,5.677h59.55c2.884,0,5.058-2.44,5.058-5.677v-5.63c0-2.846-1.891-5.44-4.494-6.168l-20.417-5.719\n" +
                    "\tc-0.039-0.011-0.086-0.02-0.126-0.031c1.288-6.719,2.05-14.014,2.05-19.896c0-13.775,0.561-30.158,1.235-44.875l64.347,3.283\n" +
                    "\tc0.077,0.004,0.161,0.011,0.228,0.006c1.239,0,2.353-0.51,3.136-1.436c0.672-0.793,1.042-1.846,1.042-2.966v-6.487\n" +
                    "\tC173.5,84.11,172.11,82.056,170.122,81.41z";
                break;
            case "A737-3B7":
                plane =
                    "M166.845,98.491l-45.971-24.356c0.147-1.968,0.204-3.898,0.204-5.55c0-6.674-0.754-17.87-5.838-17.87\n" +
                    "\tc-4.95,0-5.797,10.616-5.838,17.335l-5.5-2.914V16.641c0-9.455-4.919-16.418-11.663-16.636L91.902,0v0.003\n" +
                    "\tc-6,0.158-13,6.855-13,16.638v49.026l-6.816,3.61c0.002-0.235,0.003-0.466,0.003-0.691c0-6.674-0.759-17.87-5.843-17.87\n" +
                    "\ts-5.843,11.196-5.843,17.87c0,1.979,0.068,4.357,0.295,6.721L16.959,98.49c-1.795,0.951-3.057,3.114-3.057,5.146v8.458\n" +
                    "\tc0,2.243,1.586,3.935,3.743,3.935c0.481,0,0.947-0.087,1.422-0.257l47.46-17.135C67.297,98.36,68.735,98,69.555,98h9.347v33h-1.679\n" +
                    "\tc-0.302-6.692-1.863-10.09-4.658-10.09c-3.129,0-4.715,4.247-4.715,12.622s1.586,12.622,4.715,12.622\n" +
                    "\tc2.804,0,4.365-3.421,4.66-10.154h1.677v9.662l-23.666,25.771c-0.798,0.869-1.334,2.246-1.334,3.427v5.863\n" +
                    "\tc0,1.756,1.245,3.079,2.896,3.08c0.632,0,1.264-0.208,1.824-0.598l27.183-18.878c0.612,5.24,2.082,10.126,5.44,10.126\n" +
                    "\tc3.539,0,4.981-5.425,5.531-10.974l28.402,19.724c0.563,0.392,1.194,0.6,1.827,0.6c1.651,0,2.896-1.324,2.896-3.08v-5.863\n" +
                    "\tc0-1.181-0.536-2.558-1.335-3.428l-24.665-26.86V136h1.679c0.295,6.734,1.856,10.154,4.66,10.154c3.129,0,4.715-4.247,4.715-12.622\n" +
                    "\ts-1.586-12.622-4.715-12.622c-2.795,0-4.355,3.398-4.657,10.09h-1.681V98h10.347c0.82,0,2.268,0.36,3.039,0.637l47.468,17.079\n" +
                    "\tc0.477,0.171,0.922,0.285,1.403,0.285c2.157,0,3.743-1.664,3.743-3.908v-8.458C169.902,101.604,168.64,99.441,166.845,98.491z";
                break;
            case "B717-200":
                plane =
                    'M94.631,17.869C94.685,17.868,94.577,17.868,94.631,17.869L94.631,17.869z"/>\n' +
                    '\t<path d="M168.399,98.825l-6.204-4.372V83.5c0-3.584-2.916-6.5-6.5-6.5h-6c-2.822,0-5.223,1.811-6.12,4.33l-4.38-3.087V67.5\n' +
                    "\t\tc0-3.584-2.916-6.5-6.5-6.5h-6c-2.76,0-5.117,1.732-6.058,4.164l-7.819-5.511l1.332-21.904l-0.036-0.152\n" +
                    "\t\tc0-8.583-8.292-36.952-19.362-37.585L94.195,0v0.011c-11,0.63-20.165,28.887-20.165,37.585l1.424,22.845l-6.7,4.722\n" +
                    "\t\tC67.813,62.732,65.455,61,62.695,61h-6c-3.584,0-6.5,2.916-6.5,6.5v10.743l-4.38,3.087c-0.896-2.519-3.297-4.33-6.12-4.33h-6\n" +
                    "\t\tc-3.584,0-6.5,2.916-6.5,6.5v10.953l-6.206,4.373c-1.389,0.98-2.794,3.08-2.794,5.196v8.913c0,2.287,1.754,4.079,3.994,4.079\n" +
                    "\t\tc0.347,0,0.699-0.043,1.043-0.128l7.963-1.951v4.792c0,3.584,2.691,6.5,6,6.5s6-2.916,6-6.5v-7.733l11-2.695v0.428\n" +
                    "\t\tc0,3.584,2.691,6.5,6,6.5s6-2.916,6-6.5v-3.368l11.938-2.925l3.259,52.296l-17.844,20.007c-0.673,0.755-1.352,2.103-1.352,3.41\n" +
                    "\t\tv7.127c0,1.748,1.368,3.117,3.115,3.117c0.58,0,1.158-0.157,1.674-0.456l27.711-16.094l27.714,16.095\n" +
                    "\t\tc0.514,0.297,1.091,0.454,1.672,0.454c1.746,0,3.114-1.369,3.114-3.117v-7.127c0-1.308-0.68-2.656-1.354-3.411l-18.801-21.08\n" +
                    "\t\tl3.131-51.488l13.024,3.191v3.368c0,3.584,2.691,6.5,6,6.5s6-2.916,6-6.5v-0.428l11,2.695v7.733c0,3.584,2.691,6.5,6,6.5\n" +
                    "\t\ts6-2.916,6-6.5v-4.792l7.961,1.951c0.347,0.085,0.698,0.128,1.046,0.128c2.239,0,3.993-1.792,3.993-4.079v-8.913\n" +
                    "\t\tC171.195,101.907,169.79,99.807,168.399,98.825z M94.794,10.061c-0.054,0-0.109,0.006-0.163,0.008\n" +
                    "\t\tc-0.054-0.001-0.108-0.008-0.162-0.008H94.794z M108.608,37.663c0,0-0.21,0.522-0.336,0.065\n" +
                    "\t\tc-1.638-5.964-7.523-19.721-13.642-19.859c-6.128,0.138-12.63,13.9-14.457,19.863c-0.15,0.491-0.393-0.131-0.393-0.131\n" +
                    "\t\tl-0.115-4.522c0-5.883,7.745-22.805,14.964-22.967c7.207,0.163,14.093,17.15,14.093,23.033L108.608,37.663z";
                break;
        }
        this.plane = plane;
        return plane;
    },

    //find plane color with engine type
    findEngine(e){
        let col;
        switch (e) {
            default:
            case "CF6-80E142":
                col = "#111eae";
                break;
            case "CFM56-3B1":
                col = "#56ae2e";
                break;
            case "CFM-56-3":
                col = "#19ae9a";
                break;
            case "V2527-5A":
                col = "#8311ae";
                break;
            case "772B-60":
                col = "#e6ea11";
                break;
            case "Unknown":
                col = "#ae0b08";
                break;
        }
        this.col = col;
        return col;
    },

    //find line style for class type
    findStyle (e) {
        let style;
        switch (e) {
            default:
            case "A":
                style = new Style({
                    stroke: new Stroke({
                        color: "#ea424d",
                        width: 2
                    })
                });
                break;
            case "B":
                style = new Style({
                    stroke: new Stroke({
                        color: "#e6ea11",
                        width: 2
                    })
                });
                break;
            case "C":
                style = new Style({
                    stroke: new Stroke({
                        color: "#363bea",
                        width: 2
                    })
                });
                break;

            case "D":
                style = new Style({
                    stroke: new Stroke({
                        color: "#be42ea",
                        width: 2
                    })
                });
                break;

            case "E":
                style = new Style({
                    stroke: new Stroke({
                        color: "#15ea5c",
                        width: 2
                    })
                });
                break;
        }
        return style;
    },

    //find price word sytle with map type
    findColor(e){
        switch (e) {
            default:
            case "Road":
                return "black";
            case "RoadOnDemand":
                return "black";
            case "AerialWithLabels":
                return "white";
            case "Aerial":
                return "white";
        }
    }
}
export default editStyle;