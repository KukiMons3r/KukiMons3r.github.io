const CalculationData = () => {
  var OsszesAnyag = document.getElementsByName("Anyag")[0].value;
  var OsszesTermek = document.getElementsByName("OsszesTermek")[0].value;
  var Raklapok = document.getElementsByName("Raklapok")[0].value;
  var RaklapraKeruloDobozok = document.getElementsByName("Dobozok")[0].value;
  var DobozbaKeruloTermek = document.getElementsByName("Termek")[0].value;
  var OrankentTermekTermeles = document.getElementsByName("Ora")[0].value;
  var KisElvalaszto = document.getElementsByName("KisElvalaszto")[0];
  var NagyElvalaszto = document.getElementsByName("NagyElvalaszto")[0];
  var Eredmeny = [];
  //Temék-Doboz-Raklap AnyagSzükséglet
  var TermekenkentiAnyagSzukseglet = (OsszesAnyag / OsszesTermek).toFixed(2);
  var DobozonkéntiAnyagSzukseglet = (
    TermekenkentiAnyagSzukseglet * DobozbaKeruloTermek
  ).toFixed(2);
  var RaklaponkéntiAnyagSzukseglet = (
    DobozonkéntiAnyagSzukseglet * RaklapraKeruloDobozok
  ).toFixed(2);

  Eredmeny.push({
    Nev: "Termékenkénti anyagszükséglet",
    Ertek: TermekenkentiAnyagSzukseglet + " kg",
  });

  Eredmeny.push({
    Nev: "Dobozonkénti anyagszükséglet",
    Ertek: DobozonkéntiAnyagSzukseglet + " kg",
  });

  Eredmeny.push({
    Nev: "Raklaponkénti anyagszükséglet",
    Ertek: RaklaponkéntiAnyagSzukseglet + " kg",
  });

  //Termeléshez szükséges dobozok száma - raklapok száma
  var SzükségesDobozokATeljesTermeleshez = Math.round(
    OsszesTermek / DobozbaKeruloTermek
  );
  var SzükségesRaklapokATeljesTermeleshez = Math.round(
    SzükségesDobozokATeljesTermeleshez / RaklapraKeruloDobozok
  );

  Eredmeny.push({
    Nev: "Doboz szükséglet a teljes termeléshez",
    Ertek: SzükségesDobozokATeljesTermeleshez + " db",
  });

  Eredmeny.push({
    Nev: "Raklap szükséglet a teljes termeléshez",
    Ertek: SzükségesRaklapokATeljesTermeleshez + " db",
  });

  //Termeléshez szükséges elválasztók száma
  if (KisElvalaszto.checked) {
    var SzükségesElvalasztokATeljesTermeleshez = Math.round(
      SzükségesRaklapokATeljesTermeleshez * 4
    );
    ElvalasztoMegjekenítése();
    Eredmeny.push({
      Nev: "Kis elválasztó szükséglet a teljes termeléshez",
      Ertek: SzükségesElvalasztokATeljesTermeleshez + " db",
    });
  } else if (NagyElvalaszto.checked) {
    var SzükségesElvalasztokATeljesTermeleshez =
      SzükségesRaklapokATeljesTermeleshez;
    ElvalasztoMegjekenítése();
    Eredmeny.push({
      Nev: "Nagy elválasztó szükséglet a teljes termeléshez",
      Ertek: SzükségesElvalasztokATeljesTermeleshez + " db",
    });
  } else {
    SzükségesElvalasztokATeljesTermeleshez = 0;
  }

  var p = document.querySelectorAll("p");
  for (i = 0; i <= p.length; i++) {
    p[i].innerHTML = Eredmeny[i].Nev + ": " + Eredmeny[i].Ertek;
  }
};

const ElvalasztoMegjekenítése = () => {
  var p = document.createElement("p");
  var text = document.createTextNode("");
  p.appendChild(text);
  const element = document.getElementsByClassName("modal-body")[0];
  element.appendChild(p);
};
