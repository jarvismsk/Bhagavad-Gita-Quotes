const gitaquotes = [
  "One who sees inaction in action, and action in inaction, is intelligent among men.",
  "You should perform your duty with a view to guide people and for universal welfare.",
  "Even the wise are confused about what is action and what is inaction."
  ];

  document.getElementById("dquote").innerHTML = gitaquotes[2];

  document.getElementById("changequote").addEventListener ("click", dojo)

  function dojo () {
    alert("Hello ");
  }


  console.log(Math.floor(Math.random() * 3))