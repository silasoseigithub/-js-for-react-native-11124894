function createUserProfiles(names, modifiedNames) {
    let id = 1;
    return names.map((name, index) => ({
      originalName: name,
      modifiedName: modifiedNames[index],
      id:id++,}));
  }
 const names=["Alice", "Bob","Silas"];
 const userprofiles=createUserProfiles(names,formattedStrings);
 console.log(userprofiles);

 


  
  