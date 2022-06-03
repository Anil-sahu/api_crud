<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bootstrap demo</title>
  <link rel="stylesheet" href="../style/style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>

<body>
  <nav class="navebar">
    <div class="brand">CRUD</div>
    <div class="menu">
      <ul class="all-list">
        <li><a href="../index.php">Home</a></li>

        <li><a href="view.php" id="active">View</a></li>
      </ul>
    </div>
  </nav>
  <br /><br /><br />
  <main>
    <table id="customers">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>Mobile</th>
        <th>Email</th>
        <th>Branch</th>
        <th>Fee</th>
        <th>Action</th>

      </tr>
      <?php
      include '../db/dbcon.php';
      $selectQuery = "select * from student ";
      $query = mysqli_query($connection, $selectQuery);

      while ($result = mysqli_fetch_assoc($query)) {

      ?>
        <tr>
          <td><?php echo $result['id']; ?></td>
          <td><?php echo $result['name']; ?></td>
          <td><?php echo $result['mobile']; ?></td>

          <td><?php echo $result['email']; ?></td>
          <td><?php echo $result['branch']; ?></td>
          <td><?php echo $result['fee']; ?></td>
          <td>

            <a href="edit.php?id=<?php echo $result['id']; ?>" class="mod"><i class="fa fa-edit"></i></a>

            <a href="delete.php?id=<?php echo $result['id']; ?>" class="mod"><i class="fa fa-trash"></i></a>
          </td>
        </tr>
      <?php
      }
      ?>

    </table>
  </main>
  <script src="index.js"></script>
</body>

</html>