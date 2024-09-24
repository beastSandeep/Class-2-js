const camalize = (str) => {
  // words => [ 'hello', 'my', 'name', 'is', 'anmol' ]
  const words = str.toLowerCase().split(" ");

  // we have to keep "hello" as it is thats why loops starts form 1
  for (let i = 1; i < words.length; i++) {
    //  let's say for now word is "name"
    const word = words[i];

    // "name" => "n" => "N"
    const firstCapitalLetter = word[0].toUpperCase();

    // "name" => "ame"
    const remaingWord = word.slice(1);

    // "N" + "ame" => "Name"
    const camelCasedWord = firstCapitalLetter + remaingWord;

    // ["hello", "my" ,"name"] => ["hello", "My" ,"Name"]
    words[i] = camelCasedWord;
  }

  // words => [ 'hello', 'My', 'Name', 'Is', 'Anmol' ]
  // [ 'hello', 'My', 'Name', 'Is', 'Anmol' ] => helloMyNameIsAnmol
  const camelCasedString = words.join("");

  return camelCasedString;
};

const newString = camalize("Hello My name is anMol"); // helloMyNameIsAnmol
console.log(newString);
