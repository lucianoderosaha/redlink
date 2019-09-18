$(document).ready(function() {
	var bancos = [
				{
					name:"Banco Provincia",
					links:{
						web: "https://www.bancoprovincia.com.ar/Principal/BipPersonal",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco hipotecario",
					links:{
						web: "https://hb.hipotecario.com.ar/hb/",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Credicoop",
					links:{
						web: "https://bancainternet.bancocredicoop.coop/bcclbi/",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Bica",
					links:{
						web: "https://hb.redlink.com.ar/bancobica/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Coinag",
					links:{
						web: "https://hb.redlink.com.ar/bancocoinag/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Ciudad de Buenos Aires",
					links:{
						web: "https://hb.redlink.com.ar/ciudad/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco de Comercio",
					links:{
						web: "https://hb.redlink.com.ar/bancodecomercio/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco de Córdoba",
					links:{
						web: "https://hb.redlink.com.ar/bancor/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco de Corrientes",
					links:{
						web: "https://hb.redlink.com.ar/bancodecorrientes/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco de la Nación Argentina",
					links:{
						web: "https://hb.redlink.com.ar/bna/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco de La Pampa",
					links:{
						web: "https://hb.redlink.com.ar/bancodelapampa/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Provincia del Neuquen",
					links:{
						web: "https://hb.redlink.com.ar/bpn/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco de Tierra del Fuego",
					links:{
						web: "https://hb.redlink.com.ar/btf/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco del Chubut",
					links:{
						web: "https://hb.redlink.com.ar/bancochubut/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Entre Ríos",
					links:{
						web: "https://hb.redlink.com.ar/bancoentrerios/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Formosa",
					links:{
						web: "https://hb.redlink.com.ar/bancodeformosa/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Industrial",
					links:{
						web: "https://www.bind.com.ar/banca-electronica",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Mariva",
					links:{
						web: "https://hb.redlink.com.ar/mariva/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Masventas",
					links:{
						web: "https://hb.redlink.com.ar/bancomasventas/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Meridian",
					links:{
						web: "https://hb.redlink.com.ar/bancomeridian/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Municipal",
					links:{
						web: "https://hb.redlink.com.ar/bmros/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Piano",
					links:{
						web: "https://hb.redlink.com.ar/bancopiano/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Rioja",
					links:{
						web: "https://hb.redlink.com.ar/nblr/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Roela",
					links:{
						web: "https://hb.redlink.com.ar/bancoroela/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Saenz",
					links:{
						web: "https://hb.redlink.com.ar/bancosaenz/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco San Juan",
					links:{
						web: "https://hb.redlink.com.ar/bsj/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Santa Cruz",
					links:{
						web: "https://hb.redlink.com.ar/bancosantacruz/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Santa Fé",
					links:{
						web: "https://hb.redlink.com.ar/bancobsf/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Banco Santiago del Estero",
					links:{
						web: "https://hb.redlink.com.ar/bse/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Caja de Crédito Cuenca",
					links:{
						web: "https://hb.redlink.com.ar/cccuenca/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Consumax",
					links:{
						web: "https://hb.redlink.com.ar/consumax/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Finandino Cía. Financiera",
					links:{
						web: "https://hb.redlink.com.ar/finandino/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Italcred Cía. Financiera",
					links:{
						web: "https://hb.redlink.com.ar/italcred/login.htm",
						ios: "",
						android: ""
					}
				},
				{
					name:"Nuevo Banco del Chaco",
					links:{
						web: "https://hb.redlink.com.ar/nbch/login.htm",
						ios: "",
						android: ""
					}
				},
	];

	var bancoIndex = null;

	$("#banco").change(function(event) {
		
		bancoIndex = $("#banco").val()
		if( bancoIndex >= 0){
			console.log("show");
			//vacio la lista
				$(".como").empty();
				
				var def = new Option("ELEGÍ CÓMO", 0);
				$(def).html("ELEGÍ CÓMO");
				$(".como").append(def);

				//creo la opcion web
				var web = new Option("Sitio Web", bancos[bancoIndex].links.web);
				$(web).html("Sitio Web");
				$(".como").append(web);

				if(bancos[bancoIndex].links.ios != ""){
					var ios = new Option("App Store Apple",  bancos[bancoIndex].links.ios);
					$(ios).html("App Store Apple");
					$(".como").append(ios);
				 }
				if(bancos[bancoIndex].links.android != ""){
					var android = new Option("Play Store Android",  bancos[bancoIndex].links.android);
					$(android).html("Play Store Android");
					$(".como").append(android);
				 }

			$(".how-select").show();	
		}else{
			banco = null;
			$(".how-select").hide('fast')
			$("#navigateBtn").hide();
		}
		

	});


	$(".como").change(function(event) {
		
		if($(".como").val() == 0){
			$("#navigateBtn").hide();
		}else{
			$("#navigateBtn").show();
		}

	});

	$("#navigateBtn").click(function(event) {
		
		console.log($(".como").val());
		window.open($(".como").val());

	});
});




















