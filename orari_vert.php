<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="orari.min.css">
  <link rel="stylesheet" href="bootstrap-grid.min.css">
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="animate.min.css">
  <script src="orari.js"></script>
</head>

<body>
  <div class="container d-flex pt-3 h-100 w-90">
    <div class="row h-100 align-items-start justify-content-start">

      <div class="col-12 h-25 pt-4">
        <!-- avvisi -->
        <?php require('includes/avvisi_vert.php'); ?>
      </div>

      <div class="col-12 h-75 pt-5">
        <h1 class="w-100 border-bottom text-center">Uffici</h1>
        <!-- uffici -->
        <?php require('includes/uffici_vert.php'); ?>

        <div class="row w-100 h-10 justify-content-center align-self-end">
          <img src="aviano.png" height="100vh">
          <p class="ml-4 pt-3"><small>Comune di Aviano - 2021</small></p>
        </div>

      </div>

    </div>
  </div>

  <div id="loader-container">
    <div id="loading-bar"></div>
  </div>

</body>

</html>