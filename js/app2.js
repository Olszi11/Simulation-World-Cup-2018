$(function() {

  var tabBox = $(".editbox");
  var tabBox2 = $(".editbox2");
  var tabBox3 = $(".editbox3");
  var tabBox4 = $(".editbox4");
  var tabBox5 = $(".editbox5");


  /* PRZEKAZANIE WARTOSCI Z TABELI DO WARTOSCI MECZOW */
  for (var i = 1; i <= 32; i++) {
    ($(".team_" + i + "_match")).text(($(".team_" + i).text()));
  }

  for (var i = 1; i <= 16; i++) {
    $(".oneeight_team_" + i + "_match").text("?");
  }

  for (var i = 1; i <= 8; i++) {
    $(".onefour_team_" + i + "_match").text("?");
  }

  for (var i = 1; i <= 4; i++) {
    $(".onetwo_team_" + i + "_match").text("?");
  }

  for (var i = 1; i <= 2; i++) {
    $(".final_team_" + i + "_match").text("?");
  }

  /* zerowanie wszystkich elementow */
  function startField() {
    tabBox.val("");
    tabBox2.val("");
    tabBox3.val("");
    tabBox4.val("");
    tabBox5.val("");
    for (var i = 1; i <= 32; i++) {
      $("#number_matches_t" + i).val(0);
      $("#number_points_t" + i).val(0);
      $("#number_wins_t" + i).val(0);
      $("#number_draws_t" + i).val(0);
      $("#number_looses_t" + i).val(0);
      $("#number_goals_sc_t" + i).val(0)
      $("#number_goals_lo_t" + i).val(0)
      $("#number_bg_t" + i).val(0)

    }

  }
  startField();

  /* group stage */
  var tab = 0;
  tabBox.on("change", function(event) {
    tabBox2.val("");
    tabBox3.val("");
      tabBox4.val("");
        tabBox5.val("");
    tab = tab + 1;

    for (var i = 1; i <= 32; i++) {
      $("#number_wins_t" + i).val(0);
      $("#number_draws_t" + i).val(0);
      $("#number_looses_t" + i).val(0);
      $("#number_points_t" + i).val(0);
      $("#number_matches_t" + i).val(0);
      $("#number_goals_sc_t" + i).val(0)
      $("#number_goals_lo_t" + i).val(0)
      $("#number_bg_t" + i).val(0)
    }

    function points() {
      for (var i = 1; i <= 32; i++) {
        $("#number_points_t" + i).val(3 * Number($("#number_wins_t" + i).val()) + 1 * Number($("#number_draws_t" + i).val()));
      }
    }

    function matches() {
      for (var i = 1; i <= 32; i++) {
        $("#number_matches_t" + i).val(Number($("#number_wins_t" + i).val()) + Number($("#number_draws_t" + i).val()) + Number($("#number_looses_t" + i).val()));
      }
    }

    function goalbalance() {
      for (var i = 1; i <= 32; i++) {
        $("#number_bg_t" + i).val(Number($("#number_goals_sc_t" + i).val()) - Number($("#number_goals_lo_t" + i).val()));
      }
    }

    for (var i = 0; i < 48; i++) {
      var valueBox1 = tabBox[i * 2].value; //0,2,4,6
      var valueBox2 = tabBox[(i * 2) + 1].value; //1,3,5,7
      var string = tabBox[i * 2].getAttribute("data-team");
      var string2 = tabBox[(i * 2) + 1].getAttribute("data-team");

      if (Number(valueBox1) == "" && Number(valueBox2) == "") {
        $("#number_wins_" + string).val(Number($("#number_wins_" + string).val()) + 0);
        $("#number_draws_" + string).val(Number($("#number_draws_" + string).val()) + 0);
        $("#number_looses_" + string).val(Number($("#number_looses_" + string).val()) + 0);
        $("#number_wins_" + string2).val(Number($("#number_wins_" + string2).val()) + 0);
        $("#number_draws_" + string2).val(Number($("#number_draws_" + string2).val()) + 0);
        $("#number_looses_" + string2).val(Number($("#number_looses_" + string2).val()) + 0);
        $("#number_goals_sc_" + string).val(Number($("#number_goals_sc_" + string).val()) + 0);
        $("#number_goals_lo_" + string).val(Number($("#number_goals_lo_" + string).val()) + 0);
        $("#number_goals_sc_" + string2).val(Number($("#number_goals_sc_" + string2).val()) + 0);
        $("#number_goals_lo_" + string2).val(Number($("#number_goals_lo_" + string2).val()) + 0);

      } else if (Number(valueBox1) > Number(valueBox2)) {
        $("#number_wins_" + string).val(Number($("#number_wins_" + string).val()) + 1);
        $("#number_draws_" + string).val(Number($("#number_draws_" + string).val()) + 0);
        $("#number_looses_" + string).val(Number($("#number_looses_" + string).val()) + 0);
        $("#number_wins_" + string2).val(Number($("#number_wins_" + string2).val()) + 0);
        $("#number_draws_" + string2).val(Number($("#number_draws_" + string2).val()) + 0);
        $("#number_looses_" + string2).val(Number($("#number_looses_" + string2).val()) + 1);
        $("#number_goals_sc_" + string).val(Number($("#number_goals_sc_" + string).val()) + Number(valueBox1));
        $("#number_goals_lo_" + string).val(Number($("#number_goals_lo_" + string).val()) + Number(valueBox2));
        $("#number_goals_sc_" + string2).val(Number($("#number_goals_sc_" + string2).val()) + Number(valueBox2));
        $("#number_goals_lo_" + string2).val(Number($("#number_goals_lo_" + string2).val()) + Number(valueBox1));

      } else if (Number(valueBox1) < Number(valueBox2)) {
        $("#number_wins_" + string).val(Number($("#number_wins_" + string).val()) + 0);
        $("#number_draws_" + string).val(Number($("#number_draws_" + string).val()) + 0);
        $("#number_looses_" + string).val(Number($("#number_looses_" + string).val()) + 1);
        $("#number_wins_" + string2).val(Number($("#number_wins_" + string2).val()) + 1);
        $("#number_draws_" + string2).val(Number($("#number_draws_" + string2).val()) + 0);
        $("#number_looses_" + string2).val(Number($("#number_looses_" + string2).val()) + 0);
        $("#number_goals_sc_" + string).val(Number($("#number_goals_sc_" + string).val()) + Number(valueBox1));
        $("#number_goals_lo_" + string).val(Number($("#number_goals_lo_" + string).val()) + Number(valueBox2));
        $("#number_goals_sc_" + string2).val(Number($("#number_goals_sc_" + string2).val()) + Number(valueBox2));
        $("#number_goals_lo_" + string2).val(Number($("#number_goals_lo_" + string2).val()) + Number(valueBox1));
      } else if (Number(valueBox1) == Number(valueBox2)) {

        $("#number_wins_" + string).val(Number($("#number_wins_" + string).val()) + 0);
        $("#number_draws_" + string).val(Number($("#number_draws_" + string).val()) + 1);
        $("#number_looses_" + string).val(Number($("#number_looses_" + string).val()) + 0);
        $("#number_wins_" + string2).val(Number($("#number_wins_" + string2).val()) + 0);
        $("#number_draws_" + string2).val(Number($("#number_draws_" + string2).val()) + 1);
        $("#number_looses_" + string2).val(Number($("#number_looses_" + string2).val()) + 0);
        $("#number_goals_sc_" + string).val(Number($("#number_goals_sc_" + string).val()) + Number(valueBox1));
        $("#number_goals_lo_" + string).val(Number($("#number_goals_lo_" + string).val()) + Number(valueBox2));
        $("#number_goals_sc_" + string2).val(Number($("#number_goals_sc_" + string2).val()) + Number(valueBox2));
        $("#number_goals_lo_" + string2).val(Number($("#number_goals_lo_" + string2).val()) + Number(valueBox1));
      }

      points();
      matches();
      goalbalance();
      sortTable("1");
      sortTable("2");
      sortTable("3");
      sortTable("4");
      sortTable("5");
      sortTable("6");
      sortTable("7");
      sortTable("8");
    }

    function sortTable(num) {
      var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch;
      table = document.querySelector(".group" + num);
      switching = true;
      /*Make a loop that will continue until
      no switching has been done:*/
      while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("tr");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
          //start by saying there should be no switching:
          shouldSwitch = false;
          /*Get the two elements you want to compare,
          one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("td")[2];
          y = rows[i + 1].getElementsByTagName("td")[2];

          x1 = rows[i].getElementsByTagName("td")[8];
          y1 = rows[i + 1].getElementsByTagName("td")[8];

          x2 = rows[i].getElementsByTagName("td")[6];
          y2 = rows[i + 1].getElementsByTagName("td")[6];

          var xx = x.firstElementChild.value;
          var yy = y.firstElementChild.value;

          var gbx = x1.lastElementChild.value;
          var gby = y1.lastElementChild.value;

          var gsx = x2.firstElementChild.value;
          var gsy = y2.firstElementChild.value;

          //check if the two rows should switch place:

          if (Number(xx) == Number(yy)) {
            if (Number(gbx) == Number(gby)) {
              if (Number(gsx) < Number(gsy)) {
                shouldSwitch = true;
                break;
              }
            }
          }

          if (Number(xx) == Number(yy)) {
            if (Number(gbx) < Number(gby)) {
              shouldSwitch = true;
              break;
            }
          } else if (Number(xx) < Number(yy)) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
      }
    }

    /* 1/8 final */
    //if (tab < 96) {
    for (var j = 0; j < 96; j++) {
      if (tabBox[j].value === "") {
        for (var i = 1; i <= 16; i++) {
          $(".oneeight_team_" + i + "_match").text("?");
        }
      }
      //  }
      else /*if (tab >= 96)*/ {
        $(".oneeight_team_1_match").text($(".group1").find("tr").eq(1).children().eq(0).text()) //1A
        $(".oneeight_team_3_match").text($(".group3").find("tr").eq(1).children().eq(0).text()) //1C
        $(".oneeight_team_5_match").text($(".group5").find("tr").eq(1).children().eq(0).text()) //1E
        $(".oneeight_team_7_match").text($(".group7").find("tr").eq(1).children().eq(0).text()) //1G
        $(".oneeight_team_9_match").text($(".group2").find("tr").eq(1).children().eq(0).text()) //1B
        $(".oneeight_team_11_match").text($(".group4").find("tr").eq(1).children().eq(0).text()) //1D
        $(".oneeight_team_13_match").text($(".group6").find("tr").eq(1).children().eq(0).text()) //1F
        $(".oneeight_team_15_match").text($(".group8").find("tr").eq(1).children().eq(0).text()) //1H
        $(".oneeight_team_2_match").text($(".group2").find("tr").eq(2).children().eq(0).text()) //2B
        $(".oneeight_team_4_match").text($(".group4").find("tr").eq(2).children().eq(0).text()) //2D
        $(".oneeight_team_6_match").text($(".group6").find("tr").eq(2).children().eq(0).text()) //2F
        $(".oneeight_team_8_match").text($(".group8").find("tr").eq(2).children().eq(0).text()) //2H
        $(".oneeight_team_10_match").text($(".group1").find("tr").eq(2).children().eq(0).text()) //2A
        $(".oneeight_team_12_match").text($(".group3").find("tr").eq(2).children().eq(0).text()) //2C
        $(".oneeight_team_14_match").text($(".group5").find("tr").eq(2).children().eq(0).text()) //2E
        $(".oneeight_team_16_match").text($(".group7").find("tr").eq(2).children().eq(0).text()) //2G
      }
    }
  });


  var tab1 = 0;
  tabBox2.on("change", function(event) {
    tabBox3.val("");
      tabBox4.val("");
        tabBox5.val("");

    tab1 = tab1 + 1;

    if (tab1 < 16) {
      for (var j = 0; j < 16; j++) {
        if (tabBox2[j].value === "") {
          for (var k = 1; k <= 8; k++) {
            $(".onefour_team_" + k + "_match").text("?");
          }
        }
      }
    } else if (tab1 >= 16) {
      for (var i = 0; i < 8; i++) {
        var oneEightValueBox1 = tabBox2[i * 2].value;
        var oneEightValueBox2 = tabBox2[(i * 2) + 1].value;
        if (Number(oneEightValueBox1) > Number(oneEightValueBox2)) {
          $(".onefour_team_" + (i + 1) + "_match").text($(".oneeight_team_" + ((i * 2) + 1) + "_match").text());
        } else if (Number(oneEightValueBox1) === Number(oneEightValueBox2)) {
          $(".onefour_team_" + (i + 1) + "_match").text($(".oneeight_team_" + ((i * 2) + 1) + "_match").text() + "/" + $(".oneeight_team_" + ((i * 2) + 2) + "_match").text() + " ?");
        } else {
          $(".onefour_team_" + (i + 1) + "_match").text($(".oneeight_team_" + ((i * 2) + 2) + "_match").text());
        }
      }
    }

  });


  var tab2 = 0;
  tabBox3.on("change", function(event) {
    tabBox4.val("");
      tabBox5.val("");
    tab2 = tab2 + 1;
    if (tab2 < 8) {
      for (var j = 0; j < 8; j++) {
        if (tabBox3[j].value === "") {
          for (var k = 1; k <= 4; k++) {
            $(".onetwo_team_" + k + "_match").text("?");
          }
        }
      }
    } else if (tab2 >= 8) {

      for (var i = 0; i < 4; i++) {
        var oneFourValueBox1 = tabBox3[i * 2].value;
        var oneFourValueBox2 = tabBox3[(i * 2) + 1].value;
        if (Number(oneFourValueBox1) > Number(oneFourValueBox2)) {
          $(".onetwo_team_" + (i + 1) + "_match").text($(".onefour_team_" + ((i * 2) + 1) + "_match").text());
        } else if (Number(oneFourValueBox1) === Number(oneFourValueBox2)) {
          $(".onetwo_team_" + (i + 1) + "_match").text($(".onefour_team_" + ((i * 2) + 1) + "_match").text() + "/" + $(".onefour_team_" + ((i * 2) + 2) + "_match").text() + " ?");
        } else {
          $(".onetwo_team_" + (i + 1) + "_match").text($(".onefour_team_" + ((i * 2) + 2) + "_match").text());

        }
      }
    }

  });

  var tab3 = 0;
  tabBox4.on("change", function(event) {
    tabBox5.val("");
    tab3 = tab3 + 1;
    if (tab3 < 4) {
      for (var j = 0; j < 4; j++) {
        if (tabBox4[j].value === "") {
          for (var k = 1; k <= 2; k++) {
            $(".final_team_" + k + "_match").text("?");
          }
        }
      }
    } else if (tab3 >= 4) {

      for (var i = 0; i < 2; i++) {

        var oneTwoValueBox1 = tabBox4[i * 2].value;
        var oneTwoValueBox2 = tabBox4[(i * 2) + 1].value;
        if (Number(oneTwoValueBox1) > Number(oneTwoValueBox2)) {
          $(".final_team_" + (i + 1) + "_match").text($(".onetwo_team_" + ((i * 2) + 1) + "_match").text());
        } else if (Number(oneTwoValueBox1) === Number(oneTwoValueBox2)) {
          $(".final_team_" + (i + 1) + "_match").text($(".onetwo_team_" + ((i * 2) + 1) + "_match").text() + "/" + $(".onetwo_team_" + ((i * 2) + 2) + "_match").text() + " ?");
        } else {
          $(".final_team_" + (i + 1) + "_match").text($(".onetwo_team_" + ((i * 2) + 2) + "_match").text());
        }
      }

    }
  })


  tabBox5.on("change", function(event) {
    var FinalValueBox1 = tabBox5[0].value;
    var FinalValueBox2 = tabBox5[1].value;
    if ((Number(FinalValueBox1) > Number(FinalValueBox2)) && (tabBox5[0].value != "") && (tabBox5[1].value != "")) {
      alert("World Cup winner is " + $(".final_team_1_match").text())
    } else if (Number(FinalValueBox1) === Number(FinalValueBox2)) {
      alert("Result can't be a draw!");
    } else if ((Number(FinalValueBox1) < Number(FinalValueBox2)) && (tabBox5[0].value != "") && (tabBox5[1].value != "")) {
      alert("World Cup winner is " + $(".final_team_2_match").text())
    }

  })



  /*Gallery*/


  $('.gallery-item').on('click', function() {
    ths = $(this);
    var num_thumbnails = $('.gallery-item').children().length; //dlugosc gallery-item
    var srcImg = ths.children('img').attr('src'); //pobieram wartosc src
    //var clicked_thumbnail_index = $($('.gallery-item')).index(this);
    var clicked_thumbnail_index = $(".gallery-item").index(ths); //pobieram index ths

    if (num_thumbnails > 1) {
      $('.but').html('<a id="prev" class="previous new-color"> <i class="fa fa-arrow-left" aria-hidden="true"></i>  </a> <a id="next" class="next new-color">  <i class="fa fa-arrow-right" aria-hidden="true"></i>   </a>')
    }
    $('#modal-image').attr('src', srcImg);
    $('#myModal').modal('show');



    /*next*/
    $('.next').on('click', function() {
      clicked_thumbnail_index += 1;

      if (clicked_thumbnail_index >= num_thumbnails) {
        clicked_thumbnail_index = 0;
      }
      var next_sibling = $(".gallery-item").eq(clicked_thumbnail_index).children("img").attr("src");
      $('#modal-image').attr('src', next_sibling);
    });

    /*prev*/
    $('.previous').on('click', function() {
      clicked_thumbnail_index -= 1;

      if (clicked_thumbnail_index < 0) {
        clicked_thumbnail_index = (num_thumbnails - 1);
      }
      var next_sibling = $(".gallery-item").eq(clicked_thumbnail_index).children("img").attr("src");
      $('#modal-image').attr('src', next_sibling);
    });
  });



  var src = ["https://www.youtube.com/embed/2eERLR5RsT8",
    "https://www.youtube.com/embed/Kb68up5EidA",
    "https://www.youtube.com/embed/xRsityRoV1Q",
    "https://www.youtube.com/embed/K7Hze--NZ2c",
    "https://www.youtube.com/embed/IdKanKgtut8",
    "https://www.youtube.com/embed/ThTJAEKQHyQ",
    "https://www.youtube.com/embed/rq1Yi7OYPD0",
    "https://www.youtube.com/embed/dZ7GTtze-h0",
    "https://www.youtube.com/embed/tLJTTHNqZdU"
  ];

  var num_img = $(".img-film");
  var url = $("#cartoonVideo").attr('src');

  $("#myModal2").on('hide.bs.modal', function() {
    $("#cartoonVideo").attr('src', '');
  });


  num_img.on("click", function() {
    ths = $(this);
    var clicked = $(".img-film").index(ths); //pobieram index
    $("#myModal2").on('show.bs.modal', function() {
      $("#cartoonVideo").attr('src', src[clicked]);
    });
  });




});
