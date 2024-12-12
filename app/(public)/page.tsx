


function Homepage() {               // in tsx function name will be started by capital letter tsx means typecript xml
  
  let age: number = 18 
  

  // class 2
  return (             // yahan Link ka tag use krenge for routing between pages starting with capital L and we have to import this link from next.js bexause its a feature of next.js and not html and it will avoid loading or reloading
    <div>       
      
      <h1>--------This is the Main Page---------</h1>
    </div>                         // ye return syntax JSX khlata hai means javascript xml isme html javascript function ko return krta hai.
          // JSX Rule no:1 the whole returning code should be enclosed in a parent tag such as <> </>. This empty tag is called fragment.
  )
}  

export default Homepage             // the new page will always starst with making a folder written with small letters.