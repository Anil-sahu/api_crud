<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CRUD</title>
  <link rel="stylesheet" href="../style/style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>

<body>
  <nav class="navebar">
    <div class="brand">CRUD</div>
    <div class="menu">
      <ul class="all-list">
        <li><a href="../index.php" class="active">Home</a></li>

        <li><a href="view.php">View</a></li>
      </ul>
    </div>
  </nav>
  <main>

    <div class="container">
      <div class="box-heading">
        <h1 style="color:#03f892;">Update</h1>
        <hr>
        <img src="../image/std.svg" style="width: 70%;" />
        <hr>
        <p>Correct student details and press update button</p>
      </div>

      <form action="" method="POST">
        <div class="subhead">Update info</div>
        <hr style="margin-bottom:20px;border:1px solid #03f892;">

        <?php
        include '../db/dbcon.php';
        $id = $_GET['id'];
        $selectQuery = "select * from student where id =$id";
        $query = mysqli_query($connection, $selectQuery);
        $result = mysqli_fetch_assoc($query);
        if (isset($_POST['submited'])) {
          $name = $_POST['name'];
          $mobile = $_POST['mobile'];
          $email = $_POST['email'];
          $branch = $_POST['branch'];
          $fee = $_POST['fee'];
          $updateQuery = "update student set id =$id, name='$name', mobile ='$mobile',email='$email',branch ='$branch', fee ='$fee' where id =$id";
          $query = mysqli_query($connection, $updateQuery);

          if ($query) {
        ?>
            <script>
              alert("Update successful");
              window.location.href = "view.php";
            </script>

          <?php
          } else {
          ?>
            <script>
              alert("Update failed");
            </script>

        <?php
          }
        }

        ?>
        <div class="input-field">
          <i class="fa fa-user"></i>
          <input type="text" placeholder="Enter student name" name="name" class="field" id="name" value="<?php echo $result['name']; ?>" />
        </div>
        <div class="input-field">
          <i class="fa fa-mobile"></i>
          <input type="mobile" placeholder="Enter student name" name="mobile" class="field" id="mobile" value="<?php echo $result['mobile']; ?>" />
        </div>
        <div class="input-field">
          <i class="fa fa-envelope"></i>
          <input type="email" placeholder="Enter student name" name="email" class="field" id="" value="<?php echo $result['email']; ?>" />
        </div>

        <div class="input-field">
          <i class="fa fa-puzzle-piece"></i>
          <input type="text" placeholder="Enter branch name" name="branch" class="field" id="branch" value="<?php echo $result['branch']; ?>" />
        </div>

        <div class="input-field">
          <i class="fa fa-dollar"></i>
          <input type="text" placeholder="Enter student fees" name="fee" class="field" id="fee" value="<?php echo $result['fee']; ?>" />
        </div>
        <input type="submit" id="btn" name="submited" value="Update">

      </form>


    </div>
  </main>
</body>

</html>