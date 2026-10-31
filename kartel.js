const artists=[['Hoan','Corée du Sud','hoan.jpg','Popping','13:00–14:30','Hoan est un danseur coréen reconnu pour sa maîtrise du popping. Il débute la danse en 2002, inspiré par les vidéos de Nam Hyun-joon. Au fil des années, il perfectionne son art et acquiert une reconnaissance importante au sein de la communauté de la danse.'],['Poppin’ Pete','États-Unis','pete.jpg','Popping','14:30–16:00','Poppin’ Pete, de son vrai nom Timothy Earl Solomon, est un danseur, chorégraphe et acteur américain. Figure majeure et pionnier du popping, il est membre du célèbre groupe The Electric Boogaloos.'],['Darren & Willis','France','darren-willis.jpg','Afro-house','16:00–17:30','Darren et Willis mêlent Jazz Rock, afro, house dance et hip-hop dans un style explosif. La fratrie apporte un vent de fraîcheur à la danse debout.'],['Larry Bourgeois','France','larry.jpg','Hip-hop · Les Twins','17:30–19:00','Larry Nicolas Bourgeois, alias Ca Blaze, est un danseur, chorégraphe, mannequin et acteur français, né le 6 décembre 1988 à Sarcelles. Il est mondialement connu pour le duo hip-hop Les Twins, qu’il forme avec son frère jumeau Laurent Bourgeois, alias Lil Beast.']];
const bios={en:['Hoan is a Korean dancer known for his mastery of popping. He began dancing in 2002, inspired by videos of Nam Hyun-joon, and developed his craft and recognition within the dance community.','Poppin’ Pete, born Timothy Earl Solomon, is an American dancer, choreographer and actor. A pioneer of popping, he is a member of The Electric Boogaloos.','Darren and Willis blend Jazz Rock with afro, house dance and hip-hop. The siblings bring a fresh energy to stand-up dance.','Larry Nicolas Bourgeois, also known as Ca Blaze, is a French dancer, choreographer, model and actor. He is known worldwide as one half of Les Twins, alongside his twin brother Laurent Bourgeois, also known as Lil Beast.'],de:['Hoan ist ein koreanischer Tänzer, bekannt für sein Können im Popping. Inspiriert von Videos von Nam Hyun-joon begann er 2002 zu tanzen und entwickelte seinen Stil über die Jahre weiter.','Poppin’ Pete, mit bürgerlichem Namen Timothy Earl Solomon, ist ein US-amerikanischer Tänzer, Choreograf und Schauspieler. Er ist Popping-Pionier und Mitglied von The Electric Boogaloos.','Darren und Willis verbinden Jazz Rock mit Afro, House Dance und Hip-Hop. Die Geschwister bringen frische Energie in den Tanz.','Larry Nicolas Bourgeois, alias Ca Blaze, ist ein französischer Tänzer, Choreograf, Model und Schauspieler. Weltweit bekannt ist er als Teil von Les Twins mit seinem Zwillingsbruder Laurent Bourgeois, alias Lil Beast.']};
const fr={};document.querySelectorAll('[data-i]').forEach(el=>fr[el.dataset.i]=el.textContent);
const translations={fr,en:{venue:'Venue',date:'27–28 FEBRUARY 2027 · B CLUB GENEVA',reserve:'Book my workshops ↗',join:'Register for the battle ↗',saturday:'SATURDAY 27 FEBRUARY',sunday:'SUNDAY 28 FEBRUARY',intro:'Four workshops. Four worlds. Meet us on the dancefloor at B Club Geneva.',registration:'Online registration and payment will be available soon.',battleText:'The weekend continues with battles at B Club Geneva.',battleSoon:'Full programme and registration coming soon.',map:'Get directions ↗'},de:{venue:'Veranstaltungsort',date:'27.–28. FEBRUAR 2027 · B CLUB GENF',reserve:'Workshops buchen ↗',join:'Zum Battle anmelden ↗',saturday:'SAMSTAG, 27. FEBRUAR',sunday:'SONNTAG, 28. FEBRUAR',intro:'Vier Workshops. Vier Welten. Wir sehen uns auf der Tanzfläche im B Club Genf.',registration:'Online-Anmeldung und Bezahlung sind bald verfügbar.',battleText:'Am Sonntag geht es mit den Battles im B Club Genf weiter.',battleSoon:'Detailliertes Programm und Anmeldung folgen.',map:'Route anzeigen ↗'}};
Object.assign(translations.fr,{"twintInfo":"TWINT : +41 79 814 67 00","twintPrices":"50 CHF par stage · 100 CHF pour les quatre stages.","twintNote":"Le formulaire d’inscription est en préparation. Attendez la confirmation de votre inscription avant de payer. Le paiement sera vérifié manuellement."});
Object.assign(translations.en,{"twintInfo":"TWINT: +41 79 814 67 00","twintPrices":"CHF 50 per workshop · CHF 100 for all four workshops.","twintNote":"The registration form is being prepared. Wait for your registration confirmation before paying. Payment will be checked manually."});
Object.assign(translations.de,{"twintInfo":"TWINT: +41 79 814 67 00","twintPrices":"CHF 50 pro Workshop · CHF 100 für alle vier Workshops.","twintNote":"Das Anmeldeformular wird vorbereitet. Bitte warten Sie vor der Zahlung auf Ihre Anmeldebestätigung. Die Zahlung wird manuell geprüft."});
Object.assign(translations.en,{sponsorThanks:"THANK YOU FOR YOUR SUPPORT",sponsorTitle:"Sponsors and partners",organizerLabel:"ORGANISER"});Object.assign(translations.de,{sponsorThanks:"VIELEN DANK FÜR EURE UNTERSTÜTZUNG",sponsorTitle:"Sponsoren und Partner",organizerLabel:"ORGANISATION"});
let language='fr';const video=document.getElementById('cover'),toggle=document.getElementById('video-toggle');
function videoLabel(){toggle.textContent=({fr:['Lire la vidéo','Mettre la vidéo en pause'],en:['Play video','Pause video'],de:['Video abspielen','Video pausieren']})[language][video.paused?0:1];toggle.setAttribute('aria-pressed',String(!video.paused));}
function render(lang){language=lang;document.documentElement.lang=lang;document.querySelectorAll('[data-i]').forEach(el=>{if(translations[lang][el.dataset.i])el.textContent=translations[lang][el.dataset.i];});document.getElementById('cards').innerHTML=artists.map((a,i)=>{const country=lang==='fr'?a[1]:i===0?(lang==='en'?'South Korea':'Südkorea'):i===1?'USA':lang==='de'?'Frankreich':'France';return `<article class="artist"><div class="portrait"><img src="assets/kartel/${a[2]}" alt="${a[0]}" loading="lazy"><span class="number">0${i+1} / WORKSHOP</span></div><a class="button workshop-register" href="#inscriptions" data-workshop="${i}" aria-label="${lang==='en'?'Register for':lang==='de'?'Anmelden für':'S’inscrire au stage de'} ${a[0]}">${lang==='en'?'Register':lang==='de'?'Anmelden':'S’inscrire'} · 50 CHF ↗</a><p class="workshop-pass">${lang==='en'?'All four workshops: CHF 100':lang==='de'?'Alle vier Workshops: CHF 100':'Les quatre stages : 100 CHF'}</p><p class="country">${country.toUpperCase()}</p><div class="artist-name-row"><h3>${a[0]}</h3><span aria-hidden="true">—</span><a class="artist-name-registration" href="#inscriptions" data-workshop="${i}" aria-label="${lang==='en'?'Register for':lang==='de'?'Anmelden für':'Inscription au stage de'} ${a[0]}">${lang==='en'?'REGISTRATION':lang==='de'?'ANMELDUNG':'INSCRIPTION'} ↓</a></div><p class="style">${a[3]}</p><p class="time">${a[4]==='À confirmer'?(lang==='en'?'Time to be confirmed':lang==='de'?'Uhrzeit folgt':'Horaire à confirmer'):a[4]}<span>1h30</span></p><details><summary>${lang==='en'?'Biography':lang==='de'?'Biografie':'Biographie'}</summary><p>${lang==='fr'?a[5]:bios[lang][i]}</p></details></article>`;}).join('');videoLabel();}
document.getElementById('language').addEventListener('change',e=>render(e.target.value));toggle.addEventListener('click',()=>{if(video.paused)video.play().catch(videoLabel);else video.pause();});video.addEventListener('play',videoLabel);video.addEventListener('pause',videoLabel);if(matchMedia('(prefers-reduced-motion: reduce)').matches){video.autoplay=false;video.pause();}render('fr');


;(() => {
const text={"fr":{"title":"INSCRIPTIONS","intro":"Choisis ta formule, puis envoie ton inscription. Le paiement est vérifié manuellement par l’organisation.","name":"Nom et prénom","email":"Adresse e-mail","formula":"Ta formule","single":"Un stage — 50 CHF","all":"Les quatre stages — 100 CHF","stage":"Choisir un stage","method":"Moyen de paiement","pending":"à venir","privacy":"J’accepte la transmission de mes coordonnées et de mon choix de stages à l’Association Esprit du Cercle via Formspree pour gérer mon inscription.","submit":"Envoyer mon inscription","sending":"Envoi en cours…","total":"Total","success":"Inscription transmise. Elle reste soumise à la confirmation de l’organisation ; le paiement n’est pas encore vérifié.","error":"Impossible de confirmer l’envoi. Vérifie ta connexion et réessaie.","payment":"Paiement TWINT","payinfo":"Envoie le montant indiqué au +41 79 814 67 00 et indique ton nom ainsi que la référence ci-dessous dans le message du paiement.","ref":"Référence","note":"Conserve cette référence. Aucun e-mail de confirmation automatique ni contrôle automatique du paiement n’est garanti par ce formulaire."},"en":{"title":"REGISTRATION","intro":"Choose your option and submit your registration. Payment is checked manually by the organiser.","name":"Full name","email":"Email address","formula":"Your option","single":"One workshop — CHF 50","all":"All four workshops — CHF 100","stage":"Choose a workshop","method":"Payment method","pending":"coming soon","privacy":"I agree to send my contact details and workshop selection to Association Esprit du Cercle via Formspree to manage my registration.","submit":"Submit registration","sending":"Sending…","total":"Total","success":"Registration submitted. Organiser confirmation is still required; payment has not been verified.","error":"We could not confirm submission. Check your connection and try again.","payment":"TWINT payment","payinfo":"Send the displayed amount to +41 79 814 67 00 and include your name and the reference below in the payment message.","ref":"Reference","note":"Keep this reference. This form does not guarantee an automatic confirmation email or automatic payment verification."},"de":{"title":"ANMELDUNG","intro":"Wähle dein Angebot und sende deine Anmeldung. Die Zahlung wird von der Organisation manuell geprüft.","name":"Vor- und Nachname","email":"E-Mail-Adresse","formula":"Dein Angebot","single":"Ein Workshop — CHF 50","all":"Alle vier Workshops — CHF 100","stage":"Workshop wählen","method":"Zahlungsart","pending":"folgt","privacy":"Ich stimme der Übermittlung meiner Kontaktdaten und Workshop-Auswahl über Formspree an die Association Esprit du Cercle zur Bearbeitung meiner Anmeldung zu.","submit":"Anmeldung senden","sending":"Wird gesendet…","total":"Gesamtbetrag","success":"Anmeldung übermittelt. Die Bestätigung der Organisation steht noch aus; die Zahlung wurde noch nicht geprüft.","error":"Die Übermittlung konnte nicht bestätigt werden. Prüfe deine Verbindung und versuche es erneut.","payment":"TWINT-Zahlung","payinfo":"Sende den angezeigten Betrag an +41 79 814 67 00 und gib deinen Namen und die untenstehende Referenz in der Zahlungsnachricht an.","ref":"Referenz","note":"Bewahre diese Referenz auf. Dieses Formular garantiert keine automatische Bestätigungs-E-Mail oder automatische Zahlungsprüfung."}};
const form=document.getElementById('registration-form');
if(!form)return;
const selector=document.getElementById('language');
const total=document.getElementById('registration-total');
const status=document.getElementById('registration-status');
const stage=document.getElementById('registration-stage');
let busy=false, sent=false, statusKey='';
const reference='KARTEL-'+crypto.randomUUID().slice(0,8).toUpperCase();
const lang=()=>selector.value;
function update(){
 const t=text[lang()];
 document.querySelectorAll('[data-r]').forEach(el=>el.textContent=t[el.dataset.r]);
 const full=form.elements.formula.value==='all';
 stage.disabled=sent||full;
 document.getElementById('stage-field').hidden=full;
 total.textContent=(full?100:50)+' CHF';
 form.querySelector('button[type=submit]').textContent=busy?t.sending:t.submit;

 const method=form.elements.payment_method.value;
 const label=document.querySelector('[data-r="payment"]');
 const info=document.querySelector('[data-r="payinfo"]');
 label.textContent=({fr:'Paiement ',en:'Payment: ',de:'Zahlung: '})[lang()]+method;
 if(method!=='TWINT')info.textContent=({
 fr:method==='PayPal'?'Scanne le QR PayPal de Salley Afokossy. Saisis le montant en CHF et indique ton nom et la référence de ton inscription.':'Ouvre le lien Revolut ci-dessous. Saisis le montant en CHF et indique ton nom et la référence de ton inscription.',
 en:method==='PayPal'?'Scan Salley Afokossy’s PayPal QR. Enter the amount in CHF and include your name and registration reference.':'Open the Revolut link below. Enter the amount in CHF and include your name and registration reference.',
 de:method==='PayPal'?'Scanne den PayPal-QR von Salley Afokossy. Gib den Betrag in CHF, deinen Namen und die Anmeldereferenz an.':'Öffne den Revolut-Link. Gib den Betrag in CHF, deinen Namen und die Anmeldereferenz an.'
 })[lang()];
 document.getElementById('revolut-payment-link').hidden=method!=='Revolut';
 document.getElementById('paypal-payment-qr').hidden=method!=='PayPal';
 if(statusKey)status.textContent=t[statusKey];
}
document.getElementById('cards').addEventListener('click',event=>{
 const link=event.target.closest('[data-workshop]');
 if(!link||busy||sent)return;
 const index=Number(link.dataset.workshop);
 if(!Number.isInteger(index)||!stage.options[index])return;
 form.elements.formula.value='single';
 stage.selectedIndex=index;
 update();
});
form.addEventListener('change',update);
selector.addEventListener('change',update);
form.addEventListener('submit',async e=>{
 e.preventDefault();
 if(busy||sent||!form.reportValidity())return;
 busy=true;statusKey='';status.textContent='';
 const button=form.querySelector('button[type=submit]');button.disabled=true;update();
 const full=form.elements.formula.value==='all';
 const amount=full?100:50;
 const data=new FormData(form);
 data.set('formula',full?'All four workshops':'Single workshop');
 data.set('workshops',full?Array.from(stage.options).map(o=>o.value).join(' | '):stage.value);
 data.set('amount_chf',String(amount));data.set('currency','CHF');
 data.set('reference',reference);data.set('language',lang());
 data.set('payment_status','Pending manual verification');
 const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),25000);
 try{
 const response=await fetch(form.action,{method:'POST',body:data,headers:{Accept:'application/json'},signal:controller.signal});
 if(!response.ok)throw Error('Submission rejected');
 sent=true;statusKey='success';
 for(const el of form.elements)el.disabled=true;
 document.getElementById('payment-amount').textContent=amount+' CHF';
 document.getElementById('payment-reference').textContent=reference;
 const panel=document.getElementById('registration-payment');panel.hidden=false;panel.style.display='flex';
 }catch(error){statusKey='error';button.disabled=false;}
 finally{clearTimeout(timeout);busy=false;update();}
});
update();
})();