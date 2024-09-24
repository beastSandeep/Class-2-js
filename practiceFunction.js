const camalize = (str) => {
  // words => [ 'hello', 'my', 'name', 'is', 'anmol' ]
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // we have to keep "hello" as it is thats why condition is i >= 1
    if (i >= 1) {
      //  let's say for now word is "name"

      // "name" => "n" => "N"
      const firstCapitalLetter = word[0].toUpperCase();

      // "name" => "ame"
      const remaingWord = word.slice(1);

      // "N" + "ame" => "Name"
      const camelCasedWord = firstCapitalLetter + remaingWord;

      // ["hello", "my" ,"name"] => ["hello", "My" ,"Name"]
      words[i] = camelCasedWord;
    }
  }

  // words => [ 'hello', 'My', 'Name', 'Is', 'Anmol' ]
  // [ 'hello', 'My', 'Name', 'Is', 'Anmol' ] => helloMyNameIsAnmol
  const camelCasedString = words.join("");

  return camelCasedString;
};

const newString = camalize("Hello My name is anmol"); // helloMyNameIsAnmol
console.log(newString);
