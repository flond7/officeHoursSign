<?php
/* get json */
$json = file_get_contents('./json/uffici.json');
$j_data_all = json_decode($json, true);

/* divide json data in X pages */
$offices_in_pages = 4;
$j_data = array_chunk($j_data_all, $offices_in_pages);

/* set arrays */
$days = ["LUN: ", "MAR: ", "MER: ", "GIO: ", "VEN: "];
$pages_id = ["pageOne", "pageTwo", "pageThree"];

/* set the variable to dynamically create pages id */
$i = 0;

?>


<?php foreach ($j_data as $j_page) : ?>

  <!-- open a div with a dynamic id taken from the array pages_id-->
  <?php
  echo '<div id="' . $pages_id[$i] . '" class="animate__animated animate__fadeIn">'
  ?>

  <!-- <div id="" class="animate__animated animate__fadeIn"> -->
  <?php foreach ($j_page as $key => $value) : ?>
    <div class="row no-gutters align-items-start office">
      <div class="col-4">
        <h3 class=""><?= $value["ufficio"]; ?></h3>
        <p>Responsabile </br><?= $value["resp"]; ?></p>
      </div>
      <div class="col-8">

        <? if ($value["hide_note"] == "no"): ?>
        <?= $value["note"]; ?>
        <? endif ?>


        <?php if ($value["hide_orari"] == "no") : ?>
          <div class="row">
            <div class="col-2 col-head">Orari</div>
            <div class="col-10">
              <?php foreach ($value["orari"] as $orari_hours) : ?>
                <p><span class="giorni"><?= $orari_hours; ?></p>
              <?php endforeach; ?>
            </div>
          </div>
        <?php endif ?>

        <div class="row">
          <div class="col-2 col-head">Telefono</div>
          <div class="col-10">
            <?php foreach ($value["tel"] as $tel_number) : ?>
              <p class="m-0 p-0"><?= $tel_number; ?></p>
            <?php endforeach; ?>
          </div>
        </div>

        <div class="row">
          <div class="col-2 col-head">Mail</div>
          <div class="col-10"><?= $value["mail"]; ?></div>
        </div>


      </div>
    </div>
  <?php endforeach; ?>

  <!-- this closes the div opened with echo in php -->
  <?php
  $i++;
  echo '</div>'
  ?>
<?php endforeach; ?>