var names=new Array();
names[0]="Daniel";
names[1]="Antonio";
names[2]="Luis";
names[3]="Sol";
names[4]="Kike";
names[5]="Alejo";
names[6]="Johalbert";
names[7]="Constanza";
names[8]="Nicol";
names[9]="Maria";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}