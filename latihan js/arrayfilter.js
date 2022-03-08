let peoples = [{
        name: "Andi",
        gender: "male"
    },
    {
        name: "SIti",
        gender: "female"
    },
    {
        name: "ayu",
        gender: "female"
    }
];
let female = peoples.filter(peoples => {
    return peoples.gender === "female";
});
console.log(female);