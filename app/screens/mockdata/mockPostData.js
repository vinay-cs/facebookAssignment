module.exports = [
    {
        id:1,
        name:"Vinay Gaikwad",
        like:23,
        createdTime:{
            day:"21",
            month:"1",
            year:"2018",
            timeHH:"15",
            timeMM:"45",
            timeSS:"24"
        },
        profilePic : 'app/themes/basic/images/minion_logo.png',
        comment:"This is my Nested Comment",
        childNodes:[
            {
                id:2,
                name:"ABC",
                like:23,
                createdTime:{
                    day:"21",
                    month:"1",
                    year:"2018",
                    timeHH:"15",
                    timeMM:"45",
                    timeSS:"24"
                },
                profilePic : 'app/themes/basic/images/minion_logo4.jpg',
                comment:"This is my First Comment",
                childNodes:[ {
                    id:1213,
                    name:"XYZ",
                    like:23,
                    createdTime:{
                        day:"21",
                        month:"1",
                        year:"2018",
                        timeHH:"15",
                        timeMM:"45",
                        timeSS:"24"
                    },
                    profilePic : 'app/themes/basic/images/minion_logo4.jpg',
                    comment:"This is my LAST Comment",
                    childNodes:[
                        {
                        id:4567,
                        name:"KKK",
                        like:23,
                        createdTime:{
                        day:"21",
                            month:"1",
                            year:"2018",
                            timeHH:"15",
                            timeMM:"45",
                            timeSS:"24"
                    },
                    profilePic : 'app/themes/basic/images/minion_logo4.jpg',
                        comment:"This is my LAST Comment",
                        childNodes:[],
                        showChildNode : true
                    }],
                    showChildNode : true
                }],
                showChildNode : true
            },
            {
                id:3,
                name:"PQR",
                like:23,
                createdTime:{
                    day:"21",
                    month:"1",
                    year:"2018",
                    timeHH:"15",
                    timeMM:"45",
                    timeSS:"24"
                },
                profilePic : 'app/themes/basic/images/minion_logo3.jpg',
                comment:"This is my Second Comment",
                childNodes:[],
                showChildNode : true
            }
        ],
        showChildNode : true
    }
    // ,
    // {
    //     id: 2,
    //     name:"Vinay Gaikwad",
    //     like: 38,
    //     profilePic : 'app/themes/basic/images/minion_logo.png',
    //     comment: "This is my Second Comment",
    //     childNodes: [],
    //     showChildNode: true
    // },
    // {
    //     id:3,
    //     name:"Vinay Gaikwad",
    //     like:73,
    //     profilePic : 'app/themes/basic/images/minion_logo.png',
    //     comment:"This is my Third Comment",
    //     childNodes:[],
    //     showChildNode : true
    // }
]