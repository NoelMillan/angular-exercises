import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.scss']
})
export class Ejercicio7Component implements OnInit {

  products = [
    {"id":1,"code":"0591-3753","name":"Lotlux","description":"Pramipexole Dihydrochloride","price":755,"quantity":107,"state":"SUPER ORIGIN CC","category":"Dextroamphetamine Saccharate, Amphetamine Aspartate Monohydrate, Dextroamphetamine Sulfate and Amphetamine Sulfate","img":"Alprazolam","point":4},
    {"id":2,"code":"50436-6301","name":"Zontrax","description":"Bromday","price":298,"quantity":134,"state":"PENNSAID","category":"Sore Throat Spray Cherry","img":"CLE DE PEAU BEAUTE SILKY FOUNDATION I","point":6},
    {"id":3,"code":"53145-319","name":"Regrant","description":"Hongocura","price":441,"quantity":190,"state":"Leader Nasal","category":"Oxymorphone Hydrochloride","img":"Western FAMILY","point":4},
    {"id":4,"code":"36000-045","name":"Alpha","description":"Levofloxacin","price":504,"quantity":92,"state":"Ibuprofen","category":"FRAICHEUR THE VERT ANTIPERSPIRANT AND DEODORANT ROLL-ON","img":"Haloperidol","point":9},
    {"id":5,"code":"37808-536","name":"Pannier","description":"bacitracin","price":140,"quantity":54,"state":"Povidone Iodine Impregnated","category":"Epirubicin Hydrochloride","img":"Bladder - Kidney","point":10},
    {"id":6,"code":"64117-229","name":"Lotlux","description":"SKIN ERUPTIONS RUNNY NOSE","price":966,"quantity":10,"state":"Stavudine","category":"Gemcitabine Hydrochloride","img":"Serdaen","point":5},
    {"id":7,"code":"24385-072","name":"Trippledex","description":"GNP Caldyphen","price":297,"quantity":55,"state":"Equaline all day allergy","category":"Ibuprofen","img":"SINEMET","point":6},
    {"id":8,"code":"44911-0124","name":"Redhold","description":"Trauma plus Gel","price":742,"quantity":155,"state":"Cepacol","category":"Gabapentin","img":"Amoxicillin","point":9},
    {"id":9,"code":"45802-897","name":"Cardguard","description":"ibuprofen","price":27,"quantity":27,"state":"Atenolol","category":"Metformin Hydrochloride","img":"Red Maple","point":3},
    {"id":10,"code":"68645-424","name":"Otcom","description":"Sertraline Hydrochloride","price":987,"quantity":74,"state":"Effervescent Cold Relief","category":"Gabapentin","img":"Ocean Potion Water Sport SPF50 Sunscreen","point":1},
    {"id":11,"code":"16864-012","name":"Vagram","description":"Kerasal PF-10","price":872,"quantity":199,"state":"Risperidone","category":"Mucor plumbeus","img":"Gabapentin","point":10},
    {"id":12,"code":"0591-3499","name":"Stim","description":"Modafinil","price":261,"quantity":119,"state":"Metipranolol","category":"Sephora Super Lisseur Rides SPF 15 Age Defy Moisture","img":"Butalbital, Aspirin and Caffeine","point":10},
    {"id":13,"code":"67938-1472","name":"Prodder","description":"Eight Hour Cream Lip Protectant Sheer Tint SPF 15 Berry","price":450,"quantity":127,"state":"Ontak","category":"Good Sense Stomach Relief","img":"Hydrocortisone","point":2},
    {"id":14,"code":"11822-0449","name":"Biodex","description":"Junior Pain Relief","price":733,"quantity":120,"state":"Lycopodium Berberis","category":"Effexor","img":"Monistat 1 Combination Pack","point":8},
    {"id":15,"code":"36800-218","name":"Toughjoyfax","description":"Clear Anti Itch","price":106,"quantity":167,"state":"Omeprazole","category":"PredniSONE","img":"Epsom Salt","point":5},
    {"id":16,"code":"51435-002","name":"Keylex","description":"NEUTRACETT","price":224,"quantity":37,"state":"Olay Total Effects Pore Minimizing CC","category":"Hectorol","img":"Chloroquine","point":9},
    {"id":17,"code":"36987-2347","name":"Bitchip","description":"Para Grass Pollen","price":739,"quantity":74,"state":"PredniSONE","category":"COMPLERA","img":"LA MER THE REPARATIVE BODY SUN Broad Spectrum SPF 30","point":6},
    {"id":18,"code":"54868-0091","name":"Bamity","description":"Haloperidol","price":538,"quantity":79,"state":"TIAZAC","category":"CENTER-AL - ATRIPLEX WRIGHTII POLLEN","img":"Minivelle","point":5},
    {"id":19,"code":"41190-686","name":"Andalax","description":"citroma","price":553,"quantity":43,"state":"Metformin Hydrochloride","category":"Hemorrhoid Complex","img":"Magnesium carbonicum 6","point":3},
    {"id":20,"code":"37000-733","name":"Alphazap","description":"Nioxin Scalp Recovery","price":206,"quantity":33,"state":"Penicilium chrysogenum","category":"Estradiol","img":"Divalproex Sodium","point":1},
    {"id":21,"code":"0168-0273","name":"Matsoft","description":"Bacitracin Zinc and Polymyxin B Sulfate","price":544,"quantity":151,"state":"Arnica Plus","category":"PERIPLANETA AMERICANA","img":"Miracle Pain Cream","point":1},
    {"id":22,"code":"10812-606","name":"It","description":"Neutrogena Shine Control Makeup","price":630,"quantity":95,"state":"Proleukin","category":"ASPIRIN LOW DOSE CHEWABLE","img":"Lovastatin","point":3},
    {"id":23,"code":"54868-2930","name":"Holdlamis","description":"Alprazolam","price":426,"quantity":117,"state":"HYDROCODONE BITARTRATE AND ACETAMINOPHEN","category":"Sulfamethoxazole and Trimethoprim","img":"Eczemin","point":3},
    {"id":24,"code":"76420-795","name":"Sonair","description":"Dyural LM Kit","price":949,"quantity":31,"state":"CYZONE","category":"Candesartan cilexetil","img":"Mitomycin","point":10},
    {"id":25,"code":"68645-488","name":"Cardify","description":"Sertraline Hydrochloride","price":403,"quantity":72,"state":"Armour Thyroid","category":"Ketoconazole","img":"Cuprum aceticum Zincum valerianicum","point":5},
    {"id":26,"code":"68151-3063","name":"Stronghold","description":"Nephron FA","price":227,"quantity":143,"state":"PanOxyl","category":"Amlodipine Besylate and Benazepril Hydrochloride","img":"Ferrum silicicum Urtica","point":4},
    {"id":27,"code":"63739-546","name":"Home Ing","description":"Risperidone","price":332,"quantity":34,"state":"Old Spice Original","category":"BRYONIA ALBA","img":"Stratuscare Adult Glycerin","point":4},
    {"id":28,"code":"64117-810","name":"Viva","description":"Colds Yellow Mucous","price":421,"quantity":190,"state":"RAYOS","category":"Panatuss","img":"Academy Sports Outdoors SUNSCREEN CONTINUOUS BROAD SPECTRUM SPF 50 Water-Resistant","point":2},
    {"id":29,"code":"55154-4979","name":"Flexidy","description":"Alprazolam","price":587,"quantity":51,"state":"Lien Cichorium","category":"LBEL divine lip gloss SPF 15","img":"shoprite day calm severe","point":7},
    {"id":30,"code":"68016-378","name":"Y-find","description":"Gas Relief","price":831,"quantity":139,"state":"Tolterodine Tartrate","category":"ESSENTIAL SOLUTION COENZYME Q10 MASK SHEET","img":"Gabapentin","point":9}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
