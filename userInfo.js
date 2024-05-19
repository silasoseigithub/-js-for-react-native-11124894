const {processArray, formatArrayStrings} =require('./arrayManipulation.js');

function createUserProfiles(names) {
  const processedNumbers = processArray(names);
  const formatArrayStrings = formatArrayStrings(names, processedNumbers);

  console.log(processedNumbers);
  console.log(modifiedStrings);

    let id = 1;
    return names.map((name, index) => ({
      originalName: name,
      modifiedName: modifiedNames[index],
      id:id++,}));
  }
 const names = ["Osei", "Peter","Silas"];
const userprofiles = createUserProfiles(names);
 console.log(userprofiles);

 
// Expected output:
// {originalName: 'Osei',modifiedName: 'osei', id: 1}
// {originalName: 'Peter',modifiedName: 'PETER', id: 2}
// {originalName: 'Silas',modifiedName: 'silas', id: 3}


  
 

 


 


  
  
