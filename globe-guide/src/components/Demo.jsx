function SignIn() {
  return (
    <>
      <input type="text" placeholder="Name" />
    </>
  );
}
function SignUp() {
  return (
    <>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
    </>
  );
}

export default function About() {
  const myImg = {
    imageUrl:
      "https://images.tv9telugu.com/wp-content/uploads/2024/03/aradhya-bachchan.jpg",
    imageSize: "300px",
    name: "Rinki Kumari",
  };

  let Login;
  const isLogin = true;
  if (isLogin) {
    Login = <SignIn />;
  } else {
    Login = <SignUp />;
  }

  const students = [
    { name: "Rinki", isVeg: true, standard: "nine", id: "1" },
    { name: "Rahul", standard: "UKG", id: "2" },
    { name: "Vijay", isVeg: true, standard: "second", id: "3" },
    { name: "Puja", standard: "three", id: "4" },
    { name: "Aman", isVeg: true, standard: "play School", id: "5" },
  ];

  const listData = students.map((studentsdata) => (
    <li
      key={studentsdata.id}
      style={{
        color: studentsdata.isVeg ? "blue" : "darkgreen",
        fontStyle: "bold",
      }}
    >
      {studentsdata.id},{studentsdata.name},{studentsdata.standard}
    </li>
  ));

  const food = [
    { name: "veg", isVeg: true, id: "1" },
    { name: "Sabji", isVeg: false, id: "2" },
    { name: "Roti", isVeg: true, id: "3" },
    { name: "Fruti", isVeg: false, id: "4" },
    { name: "Samosa", isVeg: true, id: "5" },
  ];

  const isVeg = true;
  const vegitable = food.map((foodsname) => (
    <li key={foodsname.id} style={{ color: foodsname.isVeg ? "red" : "green" }}>
      {foodsname.name}
    </li>
  ));

  return (
    <>
      <img
        src={myImg.imageUrl}
        style={{ width: myImg.imageSize, height: myImg.imageSize }}
      />
      <br />
      {Login}
      <div>{isLogin ? <SignUp /> : <SignIn />}</div>
      {isLogin && <SignUp />}
      {listData}
      {vegitable}
    </>
  );
}
































import About from "./About";

function Hello() {
  return <h1>Welcome to React</h1>;
}

function Sure() {
  return alert("are you want to open this page");
}

function MyImage() {
  const myimage = {
    name: "Rinki Kumari",
    imageUrl:
      "https://images.tv9telugu.com/wp-content/uploads/2024/03/aradhya-bachchan.jpg",
    imageSize: 150,
  };

  return (
    <>
      <img
        className="avatar"
        src={myimage.imageUrl}
        style={{
          width: myimage.imageSize,
          height: myimage.imageSize,
        }}
      />
    </>
  );
}
function StudentsignUp() {
  return (
    <>
      <input type="text" placeholder="write your Name" />
      <br />
      <input type="text" placeholder="write your Name" />
      <br />
      <button>Sign Up</button>
      <br />
    </>
  );
}
function StudentsignIn() {
  return (
    <>
      <input type="text" placeholder="write your Name" />
      <br />
      <input type="text" placeholder="write your Name" />
      <br />
      <input type="email" placeholder="write your Email" />
      <br />
      <button>Sign In</button>
      <br />
    </>
  );
}
export default function MyAllPage() {
  const data = ["Rinki Kumari", "React JS Developer"];

  const user = {
    name: "Puja Kumari",
    dev: "Flutter Development",
    exp: "1.5 year's of exp.",
  };

  const isAdmission = true;
  let admissions;
  if (isAdmission) {
    admissions = <StudentsignIn />;
  } else {
    admissions = <StudentsignUp />;
  }

  const products = [
    { title: "laptop", id: "1" },
    { title: "charger", id: "2" },
    { title: "mobile", id: "3" },
    { title: "headphone", id: "4" },
    { title: "glwatchass", id: "5" },
  ];

  const listItems = products.map((productno) => (
    <li key={productno.id}> {productno.title} </li>
  ));

  return (
    <>
      <About />
      <Hello />
      <h1 className="heading">Hello guys</h1>
      <h2 className="data">Displaying Data From Array</h2>
      {data[0]}
      <br />
      {data[1]}
      <br /> <br />
      <h2 className="data">Displaying Data From Obj</h2>
      {user.name}
      <br />
      {user.dev}
      <br />
      {user.exp}
      <br /> <br />
      <MyImage />
      <h2 className="data">Conditional rendering </h2>
      {admissions}
      <h2 className="data">Ternory Oprator</h2>
      <h3>{isAdmission ? <StudentsignUp /> : <StudentsignIn />}</h3>
      <h2>Logical && syntax:</h2>
      <h3>{isAdmission && <StudentsignUp />}</h3>
      <h2 className="data">Rendering lists</h2>
      <ul className="heading">{listItems}</ul>
      <button onClick={<Sure />}>click me</button>
    </>
  );
}













