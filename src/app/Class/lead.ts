export class Lead {

    leadId:number;
    firstName:string;
    lastName:string;
	phoneNumber:number;
	emailAddress:string ;
	dateOfBirth:string ;
	pincode:number;
	gender:string ;
	doYouSmoke:String ;
	doYouConsumeAlcohol:string ;
	address:string;
	birthday:number;
	addDependents:string;
	annualIncome:string;
	money1:number;
	money2:number;
	identityName:string;
	financialName:string;

    constructor(leadId:number,
        firstName:string,
        lastName:string,
        phoneNumber:number,
        emailAddress:string,
        dateOfBirth:string,
        pincode:number,
        gender:string,
        doYouSmoke:string,
        doYouConsumeAlcohol:string,
        address:string,
        birthday:number,
        addDependents:string,
        annualIncome:string,
        money1:number,
        money2:number,
        identityName:string,
        financialName:string
    )
    {
        this.leadId=leadId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phoneNumber=phoneNumber;
        this.emailAddress=emailAddress;
        this.dateOfBirth=dateOfBirth;
        this.pincode = pincode;
		this.gender = gender;
		this.doYouSmoke = doYouSmoke;
		this.doYouConsumeAlcohol = doYouConsumeAlcohol;
			this.address = address;
			this.birthday = birthday;
			this.addDependents = addDependents;
			this.annualIncome = annualIncome;
			this.money1 = money1;
			this.money2 = money2;
			this.identityName = identityName;
			this.financialName = financialName
    }
}
