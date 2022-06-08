<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CRUD</title>
  <link rel="stylesheet" href="style/style.css" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>

<body>
  <nav class="navebar">
    <div class="brand">CRUD</div>
    <div class="menu">
      <ul class="all-list">
        <li><a href="index.php" id="active">Home</a></li>

        <li><a href="pages/view.php">View</a></li>
      </ul>
    </div>
  </nav>
  <main>
    <!-- name,email, mobile,branch,fees,gender -->
    <div class="container">
      <div class="box-heading">
        <h1 style="color:#68f1b8;">Welcome</h1>
        <hr>

        <img src="image/std.svg" />
        <hr>
        <p>Fill all details of student and add </p>
      </div>

      <form action="" method="POST">
        <div class="subhead">Add student</div>
        <hr>
        <?php include 'pages/form.php'; ?>
        <input type="submit" id="btn" name="submited" value="Add">

      </form>

    </div>
  </main>
</body>

</html>
<?php
include 'db/dbcon.php';
if (isset($_POST['submited'])) {
  $name = $_POST['name'];
  $mobile = $_POST['mobile'];
  $email = $_POST['email'];
  $branch = $_POST['branch'];
  $fee = $_POST['fee'];
  if ($name != "") {
?>
    <script>
      alert("Please enter student name");
      return;
    </script>

  <?php
  }
  if (strlen($number) != 10) {
  ?>
    <script>
      alert("PLease enter valid mobile number");
      return;
    </script>
  <?php
  }

  $insertQuery = "insert into student(name,mobile,email,branch,fee) value('$name','$mobile','$email','$branch','$fee')";
  $query = mysqli_query($connection, $insertQuery);

  if ($query) {
  ?>
    <script>
      alert("Data inserted successfull");
      window.location.href = "pages/view.php";
    </script>

  <?php
  } else {
  ?>

    <Script>
      alert("Data not inserted");
    </Script>
<?php
  }
}

?>