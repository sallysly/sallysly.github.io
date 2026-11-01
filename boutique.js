const shopText={"fr":{"title":"BOUTIQUE T-SHIRTS","intro":"Choisis ton modèle et ta taille.","price":"40 CHF / T-shirt","size":"Taille","quantity":"Quantité","add":"Ajouter au panier","cart":"Ta commande","empty":"Ton panier est vide.","remove":"Retirer","total":"Total des T-shirts","name":"Nom et prénom","email":"Adresse e-mail","handover":"Remise ou livraison souhaitée","delivery":"La remise des articles et les éventuels frais d’envoi sont à convenir avec l’organisation avant le paiement.","consent":"J’accepte de transmettre mes coordonnées et ma commande à l’Association Esprit du Cercle via Formspree.","submit":"Envoyer ma demande de commande","sending":"Envoi en cours…","success":"Demande de commande transmise. Attends la confirmation de la disponibilité et des modalités de remise avant de payer. Le paiement sera vérifié manuellement.","error":"L’envoi n’a pas pu être confirmé. Réessaie après avoir vérifié ta connexion.","choose":"Ajoute au moins un T-shirt au panier.","method":"Moyen de paiement","payment":"Instructions de paiement","reference":"Référence de commande","note":"Indique ton nom et cette référence dans le paiement. Aucune confirmation automatique de paiement n’est émise par le site.","revolut":"Payer avec Revolut ↗","paypal":"Ouvrir le QR PayPal ↗","back":"Retour à l’accueil ↗","visual":"Visuels de présentation.","shopLink":"BOUTIQUE T-SHIRTS ↗","limit":"Maximum 99 exemplaires par modèle et taille."},"en":{"title":"T-SHIRT SHOP","intro":"Choose your design and size.","price":"CHF 40 / T-shirt","size":"Size","quantity":"Quantity","add":"Add to basket","cart":"Your order","empty":"Your basket is empty.","remove":"Remove","total":"T-shirt total","name":"Full name","email":"Email address","handover":"Preferred collection or delivery","delivery":"Collection arrangements and any shipping costs must be agreed with the organiser before payment.","consent":"I agree to send my contact details and order to Association Esprit du Cercle via Formspree.","submit":"Send my order request","sending":"Sending…","success":"Order request submitted. Wait for confirmation of availability and collection or delivery arrangements before paying. Payment will be checked manually.","error":"Submission could not be confirmed. Check your connection and try again.","choose":"Add at least one T-shirt to your basket.","method":"Payment method","payment":"Payment instructions","reference":"Order reference","note":"Include your name and this reference in the payment. The website does not issue automatic payment confirmation.","revolut":"Pay with Revolut ↗","paypal":"Open the PayPal QR ↗","back":"Back to home ↗","visual":"Presentation images.","shopLink":"T-SHIRT SHOP ↗","limit":"Maximum 99 items per design and size."},"de":{"title":"T-SHIRT-SHOP","intro":"Wähle dein Modell und deine Größe.","price":"CHF 40 / T-Shirt","size":"Größe","quantity":"Anzahl","add":"In den Warenkorb","cart":"Deine Bestellung","empty":"Dein Warenkorb ist leer.","remove":"Entfernen","total":"T-Shirt-Gesamtbetrag","name":"Vor- und Nachname","email":"E-Mail-Adresse","handover":"Gewünschte Übergabe oder Lieferung","delivery":"Übergabe und eventuelle Versandkosten sind vor der Zahlung mit der Organisation zu vereinbaren.","consent":"Ich stimme der Übermittlung meiner Kontaktdaten und Bestellung über Formspree an die Association Esprit du Cercle zu.","submit":"Bestellanfrage senden","sending":"Wird gesendet…","success":"Bestellanfrage übermittelt. Warte vor der Zahlung auf die Bestätigung der Verfügbarkeit und der Übergabe oder Lieferung. Die Zahlung wird manuell geprüft.","error":"Die Übermittlung konnte nicht bestätigt werden. Prüfe deine Verbindung und versuche es erneut.","choose":"Lege mindestens ein T-Shirt in den Warenkorb.","method":"Zahlungsart","payment":"Zahlungsinformationen","reference":"Bestellreferenz","note":"Gib deinen Namen und diese Referenz bei der Zahlung an. Die Website bestätigt Zahlungen nicht automatisch.","revolut":"Mit Revolut bezahlen ↗","paypal":"PayPal-QR öffnen ↗","back":"Zur Startseite ↗","visual":"Produktvisualisierungen.","shopLink":"T-SHIRT-SHOP ↗","limit":"Maximal 99 Stück pro Modell und Größe."},"it":{"title":"NEGOZIO T-SHIRT","intro":"Scegli il modello e la taglia.","price":"40 CHF / T-shirt","size":"Taglia","quantity":"Quantità","add":"Aggiungi al carrello","cart":"Il tuo ordine","empty":"Il carrello è vuoto.","remove":"Rimuovi","total":"Totale T-shirt","name":"Nome e cognome","email":"Indirizzo e-mail","handover":"Ritiro o consegna desiderati","delivery":"Il ritiro e gli eventuali costi di spedizione devono essere concordati con l’organizzazione prima del pagamento.","consent":"Acconsento a trasmettere i miei dati di contatto e l’ordine all’Association Esprit du Cercle tramite Formspree.","submit":"Invia la richiesta d’ordine","sending":"Invio in corso…","success":"Richiesta d’ordine inviata. Attendi la conferma della disponibilità e delle modalità di ritiro o consegna prima di pagare. Il pagamento sarà verificato manualmente.","error":"Impossibile confermare l’invio. Controlla la connessione e riprova.","choose":"Aggiungi almeno una T-shirt al carrello.","method":"Metodo di pagamento","payment":"Istruzioni di pagamento","reference":"Riferimento dell’ordine","note":"Indica il tuo nome e questo riferimento nel pagamento. Il sito non conferma automaticamente il pagamento.","revolut":"Paga con Revolut ↗","paypal":"Apri il QR PayPal ↗","back":"Torna alla home ↗","visual":"Immagini di presentazione.","shopLink":"NEGOZIO T-SHIRT ↗","limit":"Massimo 99 articoli per modello e taglia."}};
const shopProducts=[["edc","EDC","edc.jpg"],["matignon","Matignon","matignon.jpg"],["sdc","Swiss Dance Challenge","swiss-dance-challenge.jpg"],["esprit","Esprit du Cercle","esprit-du-cercle.jpg"]];
function shopTotal(lines){return lines.reduce((sum,line)=>sum+40*line.quantity,0);}
function validShopLine(line){return shopProducts.some(p=>p[0]===line.id)&&['S','M','L','XL'].includes(line.size)&&Number.isInteger(line.quantity)&&line.quantity>=1&&line.quantity<=99;}
const cart=[];
const language=document.getElementById('shop-language'),form=document.getElementById('shop-form'),status=document.getElementById('shop-status');
let busy=false,sent=false,statusKey='';
const reference='SHOP-'+crypto.randomUUID().slice(0,8).toUpperCase();
function renderShop(){
const t=shopText[language.value];document.documentElement.lang=language.value;document.title=t.title+' — Esprit du Cercle';
document.querySelectorAll('[data-shop]').forEach(el=>el.textContent=t[el.dataset.shop]);
const container=document.getElementById('shop-cart');container.replaceChildren();
if(!cart.length){const p=document.createElement('p');p.textContent=t.empty;container.append(p);}
cart.forEach((line,index)=>{
const row=document.createElement('div');row.className='shop-cart-line';
const label=document.createElement('span');label.textContent=shopProducts.find(p=>p[0]===line.id)[1]+' · '+line.size+' × '+line.quantity+' — '+(40*line.quantity)+' CHF';
const remove=document.createElement('button');remove.type='button';remove.textContent=t.remove;remove.disabled=busy||sent;
remove.addEventListener('click',()=>{if(busy||sent)return;cart.splice(index,1);renderShop();});row.append(label,remove);container.append(row);
});
document.getElementById('shop-total').textContent=shopTotal(cart)+' CHF';
form.querySelector('button[type=submit]').textContent=t[busy?'sending':'submit'];
form.querySelector('button[type=submit]').disabled=busy||sent||!cart.length;
document.querySelectorAll('[data-add]').forEach(b=>b.disabled=busy||sent);
if(statusKey)status.textContent=t[statusKey];
}
document.querySelectorAll('[data-add]').forEach(button=>button.addEventListener('click',()=>{
if(busy||sent)return;
const product=button.closest('[data-product]');
const qty=product.querySelector('.shop-quantity');
if(!qty.reportValidity())return;
const line={id:button.dataset.add,size:product.querySelector('.shop-size').value,quantity:Number(qty.value)};
if(!validShopLine(line))return;
const existing=cart.find(x=>x.id===line.id&&x.size===line.size);
if(existing&&existing.quantity+line.quantity>99){statusKey='limit';renderShop();return;}
if(existing)existing.quantity+=line.quantity;else cart.push(line);
statusKey='';status.textContent='';renderShop();
}));
language.addEventListener('change',renderShop);
form.addEventListener('submit',async event=>{
event.preventDefault();if(busy||sent||!form.reportValidity())return;
if(!cart.length||!cart.every(validShopLine)){statusKey='choose';renderShop();return;}
busy=true;statusKey='';status.textContent='';renderShop();
const method=form.elements.payment_method.value;
const data=new FormData(form);
data.set('_subject','Commande T-shirts — paiement et remise à vérifier');
data.set('order_type','T-shirts');
data.set('items',cart.map(x=>shopProducts.find(p=>p[0]===x.id)[1]+' | '+x.size+' | quantity '+x.quantity+' | '+40*x.quantity+' CHF').join('\n'));
data.set('items_json',JSON.stringify(cart));data.set('amount_chf',String(shopTotal(cart)));data.set('currency','CHF');
data.set('unit_price_chf','40');data.set('reference',reference);data.set('language',language.value);
data.set('payment_status','Pending manual verification');data.set('fulfilment_status','To be agreed before payment');
const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),25000);
try{
const response=await fetch(form.action,{method:'POST',headers:{Accept:'application/json'},body:data,signal:controller.signal});
if(!response.ok)throw Error('Submission failed');
sent=true;statusKey='success';for(const field of form.elements)field.disabled=true;
document.getElementById('shop-reference').textContent=reference;
document.getElementById('shop-twint').hidden=method!=='TWINT';
document.getElementById('shop-revolut').hidden=method!=='Revolut';
document.getElementById('shop-paypal').hidden=method!=='PayPal';
document.getElementById('shop-payment').hidden=false;
}catch(error){statusKey='error';}
finally{clearTimeout(timeout);busy=false;renderShop();}
});
renderShop();