$(document).ready(function() {
	var bancos = [
				{
					name:"Banco Provincia",
					links:{
						web: "https://www.bancoprovincia.com.ar/Principal/BipPersonal",
						app: ""
					}
				},
				{
					name:"Banco hipotecario",
					links:{
						web: "https://hb.hipotecario.com.ar/hb/",
						app: ""
					}
				},
				{
					name:"Banco Credicoop",
					links:{
						web: "https://bancainternet.bancocredicoop.coop/bcclbi/",
						app: ""
					}
				},
				{
					name:"Banco Bica",
					links:{
						web: "https://hb.redlink.com.ar/bancobica/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Coinag",
					links:{
						web: "https://hb.redlink.com.ar/bancocoinag/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Ciudad de Buenos Aires",
					links:{
						web: "https://hb.redlink.com.ar/ciudad/login.htm",
						app: ""
					}
				},
				{
					name:"Banco de Comercio",
					links:{
						web: "https://hb.redlink.com.ar/bancodecomercio/login.htm",
						app: ""
					}
				},
				{
					name:"Banco de Córdoba",
					links:{
						web: "https://hb.redlink.com.ar/bancor/login.htm",
						app: ""
					}
				},
				{
					name:"Banco de Corrientes",
					links:{
						web: "https://hb.redlink.com.ar/bancodecorrientes/login.htm",
						app: ""
					}
				},
				{
					name:"Banco de la Nación Argentina",
					links:{
						web: "https://hb.redlink.com.ar/bna/login.htm",
						app: ""
					}
				},
				{
					name:"Banco de La Pampa",
					links:{
						web: "https://hb.redlink.com.ar/bancodelapampa/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Provincia del Neuquen",
					links:{
						web: "https://hb.redlink.com.ar/bpn/login.htm",
						app: ""
					}
				},
				{
					name:"Banco de Tierra del Fuego",
					links:{
						web: "https://hb.redlink.com.ar/btf/login.htm",
						app: ""
					}
				},
				{
					name:"Banco del Chubut",
					links:{
						web: "https://hb.redlink.com.ar/bancochubut/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Entre Ríos",
					links:{
						web: "https://hb.redlink.com.ar/bancoentrerios/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Formosa",
					links:{
						web: "https://hb.redlink.com.ar/bancodeformosa/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Industrial",
					links:{
						web: "https://www.bind.com.ar/banca-electronica",
						app: ""
					}
				},
				{
					name:"Banco Mariva",
					links:{
						web: "https://hb.redlink.com.ar/mariva/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Masventas",
					links:{
						web: "https://hb.redlink.com.ar/bancomasventas/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Meridian",
					links:{
						web: "https://hb.redlink.com.ar/bancomeridian/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Municipal",
					links:{
						web: "https://hb.redlink.com.ar/bmros/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Piano",
					links:{
						web: "https://hb.redlink.com.ar/bancopiano/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Rioja",
					links:{
						web: "https://hb.redlink.com.ar/nblr/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Roela",
					links:{
						web: "https://hb.redlink.com.ar/bancoroela/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Saenz",
					links:{
						web: "https://hb.redlink.com.ar/bancosaenz/login.htm",
						app: ""
					}
				},
				{
					name:"Banco San Juan",
					links:{
						web: "https://hb.redlink.com.ar/bsj/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Santa Cruz",
					links:{
						web: "https://hb.redlink.com.ar/bancosantacruz/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Santa Fé",
					links:{
						web: "https://hb.redlink.com.ar/bancobsf/login.htm",
						app: ""
					}
				},
				{
					name:"Banco Santiago del Estero",
					links:{
						web: "https://hb.redlink.com.ar/bse/login.htm",
						app: ""
					}
				},
				{
					name:"Caja de Crédito Cuenca",
					links:{
						web: "https://hb.redlink.com.ar/cccuenca/login.htm",
						app: ""
					}
				},
				{
					name:"Consumax",
					links:{
						web: "https://hb.redlink.com.ar/consumax/login.htm",
						app: ""
					}
				},
				{
					name:"Finandino Cía. Financiera",
					links:{
						web: "https://hb.redlink.com.ar/finandino/login.htm",
						app: ""
					}
				},
				{
					name:"Italcred Cía. Financiera",
					links:{
						web: "https://hb.redlink.com.ar/italcred/login.htm",
						app: ""
					}
				},
				{
					name:"Nuevo Banco del Chaco",
					links:{
						web: "https://hb.redlink.com.ar/nbch/login.htm",
						app: ""
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

				if(bancos[bancoIndex].links.app != ""){
					var app = new Option("App Móvil",  bancos[bancoIndex].links.app);
					$(app).html("App Móvil");
					$(".como").append(app);
				 }
			

			$(".how-select").show();	
			$("#navigateBtn").hide();
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




















