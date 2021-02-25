<?php
/* get json */
$json = file_get_contents('./json/avvisi.json');
/* var_dump($json); */
$j_data = json_decode($json, true);
?>

<h1 class="w-100 border-bottom mb-3">Avvisi</h1>
<div class="row">
  <?php foreach ($j_data as $key => $value) : ?>
    <div class="h-100 border-gray avviso">
      <p class="py-3"><?= $value["text"]; ?></p>
    </div>
  <?php endforeach; ?>
</div>
<p class="text-center pt-3"><img src="aviano.png" height="150px"></p>
<p class="text-center pt-3"><small>Comune di Aviano - 2021</small></p>