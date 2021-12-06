let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];


  function describeItem (item) {
    if (item === "School of Code mug"){
        console.log(`I have a ${myCollection[0].name}. Here's what I like about it: ${myCollection[0].whatILike}`)
    }
    if (item === "School of Code hat"){
        console.log(`I have a ${myCollection[1].count} ${myCollection[1].name}. Here's what I like about it: ${myCollection[1].whatILike}`)
    }
    if (item === "School of Code pillow"){
        console.log(`I have a ${myCollection[2].name}. Here's what I like about it: ${myCollection[2].whatILike}`)
    }
  }
  describeItem("School of Code pillow")

