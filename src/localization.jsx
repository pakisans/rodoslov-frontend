import LocalizedStrings from "localized-strings";

let strings = new LocalizedStrings({
    sr: {
        header: {
            logout: 'Izlogujte se',
            login: 'Prijava',
            family: 'Familije',
            registratoin: 'Registracija',
            adminPanel: {
                ttitle: 'Admin',
            },
            navigation: 'Navigation',
            title: 'Rodoslov',
            panel: 'User panel'
        },
        pages: {
            base: {
                viewBiography:'Pogledajte biografiju',
                noResultText: 'Nisu pronadjeni rezultati zadate pretrage.'
            },
            welcomePage:{
                login: 'Ulogujte se',
                userLogin: 'Nastavite kao gost',
                welcome: 'Dobrodosli',
                rodoslov: 'Rodoslov'
            },
            login: {
                loginTitle: 'Prijava na sistem',
                fieldRequired: 'Ovo polje je obavezno.',
                emailError: 'Unesite ispravnu email adresu.',
                passwordError: 'Ovo polje je obavezno.',
            },
            registartion: {
                registartionTitle: 'Registracija',
            },
            family: {
                pageTitle: 'Familija',
                familyTitle: 'Familije',
                familyName: 'Naziv familije',
                editFamily: 'Izmena podataka za familiju',
                addFamily: 'Dodajte novu familiju',
                noStructureMessage: 'Izabrana familija, trenutno nema strukturu.'
            },
            biography: {
                pageTitle: 'Biografije',
                title: 'Biografija',
                addBiography: 'Dodaj biografiju',
                editBiography: 'Izmeni biografiju',
                dateFrom: 'Vazi od',
                dateTo: 'Vazi do',
                dateEnd: 'do',
                whereIs: 'Gde je bio',
                biographyDescription: 'Opis biografije',
                graveMarker: 'Grobna oznaka',
                spouseInformation: 'Supruznik',
                sheet: 'List',
                noResult: 'Izabrana osoba trenutno nema upisanu biografiju u bazu.',
                childrens: 'Deca',
                parent: 'Roditelj',
                slibings: 'Braca/Sestre'
            },
            sheets: {
                pageTitle: 'Listovi',
                addSheet: 'Dodavanje lista',
                editSheet: 'Izmena lista',
                firstName: 'Ime',
                isStructure: 'Ima strukturu',
                dateOfBirth: 'Datum rodjenja',
                dateOfDeath: 'Datum smrti',
                address: 'Adresa',
                photo: 'Slika',
                family: 'Familija',
                currentLevel: 'Koleno'
            },
            structure: {
                id: 'Id',
                family: 'Familija',
                subordinate: 'Podredjen',
                superior: 'Odredjen',
                pageTitle: 'Strukture',
                addStructure: 'Dodajte strukturu',
                editStructure: 'Izmenite strukturu'     
            }
        },
        components: {
            common: {
                select:'Izaberi'
            },
            forms: {
                loginForm: {
                    username: 'Email',
                    password: 'Lozinka',
                    registration: 'Registrujte se',
                    login: 'Prijava',
                    invalidCreds: 'Uneti podaci nisu tacni'
                },
                registerForm: {
                    username: 'Email',
                    password: 'Lozinka',
                    firstName: 'Ime',
                    lastName: 'Prezime',
                    repeatPassword: 'Ponovite Lozinku',
                    email: 'Email',
                    register: 'Registrujte se',
                    repeatPasswordError: 'Lozinke se ne poklapaju',
                    userExist: 'Korisnik vec postoji'
                },
                common: {
                    required: 'Ovo polje je obavezno.',
                    saveButton: 'Sacuvaj',
                    cancelButton: 'Odustani'
                },
                family: {
                    familyName: 'Naziv familije'
                },
                strucutre: {
                    firstName: 'Ime',
                    isStructure: 'Ima strukturu',
                    dateOfBirth: 'Datum rodjenja',
                    dateOfDeath: 'Datum smrti',
                    address: 'Adresa',
                    photo: 'Slika',
                    family: 'Familija',
                    currentLevel: 'Koleno',
                    superior: 'Odredjeni',
                    subordinate: 'Podredjeni',
                    addPhoto: 'Ubacite sliku',
                    photo: 'Slika'
                },
                biography: {
                    list: 'List',
                    dateFrom:'Vazi od',
                    dateTo:'Vazi do',
                    whereIs:'Gde je bio',
                    biographyDescription: 'Opis biografije',
                    graveMarker:'Grobna oznaka',
                    spouseInformation: 'Supruznik',
                    sheet: 'List'
                }
            },
            dataGrid: {
                actions: 'Akcije',
                deleteItem: 'Izbrisi stavku',
                editItem: 'Izmeni stavku',
                add: 'Dodaj',
            },
            helpDialog: {
                deleteTitle: 'Brisanje stavke',
                deleteText: 'Da li ste sigurni da zelite da obrisete ovu stavku?',
                yesText: 'Potvrdite',
                noText: 'Odustanite'
            },
            adminPanel: {
                adminTitle: 'Administracija',
                entities: {
                    family: 'Familije',
                    sheets: 'Listovi',
                    biography: 'Biografije',
                    structure: 'Struktura'
                }
            },
            actionCell: {
                delete: 'Brisanje',
                edit: 'Izmena'
            }
        },
        common: {
            errorDeleting: 'Greska prilikom brisanja stavke',
            errorEditing: 'Greska prilikom izmene stakve',
            errorAdding: 'Greska prilikom dodavanja stavke',
            itemDeleted: 'Stavka izbrisana',
            itemAdded: 'Stavka dodana',
            itemUpdated: 'Stavka izmenjena',
            errorDeletingParent: 'Greska prilikom brisanja stavke. Roditelji koji sadrze decu ne mogu biti obrisani.'
        }
    },
    en: {
        header: {
            logout: 'Log out',
            login: 'Sign in',
            family: 'Families',
            registration: 'Registration',
            adminPanel: {
                ttitle: 'Admin',
            },
            navigation: 'Navigation',
            title: 'Genealogy',
            panel: 'User panel'
        },
        pages: {
            base: {
                viewBiography:'View biography',
                noResultText: 'No results found for the given search.'
            },
            welcomePage:{
                login: 'Log in',
                userLogin: 'Continue as guest',
                welcome: 'Welcome',
                rodoslov: 'Genealogy'
            },
            login: {
                loginTitle: 'Sign in to the system',
                fieldRequired: 'This field is required.',
                emailError: 'Enter a valid email address.',
                passwordError: 'This field is required.',
            },
            registration: {
                registrationTitle: 'Registration',
            },
            family: {
                pageTitle: 'Family',
                familyTitle: 'Families',
                familyName: 'Family name',
                editFamily: 'Edit family details',
                addFamily: 'Add a new family',
                noStructureMessage: 'The selected family currently has no structure.'
            },
            biography: {
                pageTitle: 'Biographies',
                title: 'Biography',
                addBiography: 'Add biography',
                editBiography: 'Edit biography',
                dateFrom: 'Valid from',
                dateTo: 'Valid to',
                dateEnd: 'until',
                whereIs: 'Where he/she was',
                biographyDescription: 'Biography description',
                graveMarker: 'Grave marker',
                spouseInformation: 'Spouse',
                sheet: 'Sheet',
                noResult: 'The selected person currently has no biography in the database.',
                childrens: 'Children',
                parent: 'Parent',
                siblings: 'Siblings'
            },
            sheets: {
                pageTitle: 'Sheets',
                addSheet: 'Add sheet',
                editSheet: 'Edit sheet',
                firstName: 'First name',
                isStructure: 'Has structure',
                dateOfBirth: 'Date of birth',
                dateOfDeath: 'Date of death',
                address: 'Address',
                photo: 'Photo',
                family: 'Family',
                currentLevel: 'Generation'
            },
            structure: {
                id: 'Id',
                family: 'Family',
                subordinate: 'Subordinate',
                superior: 'Superior',
                pageTitle: 'Structures',
                addStructure: 'Add structure',
                editStructure: 'Edit structure'
            }
        },
        components: {
            common: {
                select:'Select'
            },
            forms: {
                loginForm: {
                    username: 'Email',
                    password: 'Password',
                    registration: 'Register',
                    login: 'Sign in',
                    invalidCreds: 'The entered data is incorrect'
                },
                registerForm: {
                    username: 'Email',
                    password: 'Password',
                    firstName: 'First name',
                    lastName: 'Last name',
                    repeatPassword: 'Repeat Password',
                    email: 'Email',
                    register: 'Register',
                    repeatPasswordError: 'Passwords do not match',
                    userExist: 'User already exists'
                },
                common: {
                    required: 'This field is required.',
                    saveButton: 'Save',
                    cancelButton: 'Cancel'
                },
                family: {
                    familyName: 'Family name'
                },
                structure: {
                    firstName: 'First name',
                    isStructure: 'Has structure',
                    dateOfBirth: 'Date of birth',
                    dateOfDeath: 'Date of death',
                    address: 'Address',
                    photo: 'Photo',
                    family: 'Family',
                    currentLevel: 'Generation',
                    superior: 'Superior',
                    subordinate: 'Subordinate',
                    addPhoto: 'Insert photo',
                    photo: 'Photo'
                },
                biography: {
                    list: 'List',
                    dateFrom: 'Valid from',
                    dateTo: 'Valid to',
                    whereIs: 'Where he/she was',
                    biographyDescription: 'Biography description',
                    graveMarker: 'Grave marker',
                    spouseInformation: 'Spouse',
                    sheet: 'Sheet'
                }
            },
            dataGrid: {
                actions: 'Actions',
                deleteItem: 'Delete item',
                editItem: 'Edit item',
                add: 'Add',
            },
            helpDialog: {
                deleteTitle: 'Deleting item',
                deleteText: 'Are you sure you want to delete this item?',
                yesText: 'Confirm',
                noText: 'Cancel'
            },
            adminPanel: {
                adminTitle: 'Administration',
                entities: {
                family: 'Families',
                sheets: 'Sheets',
                biography: 'Biographies',
                structure: 'Structure'
            }
            },
            actionCell: {
                delete: 'Delete',
                edit: 'Edit'
            }
        },
        common: {
            errorDeleting: 'Error deleting',
            errorEditing: 'Error editing',
            errorAdding: 'Error adding',
            itemDeleted: 'Item deleted',
            itemAdded: 'Item added',
            itemUpdated: 'Item updated',
        }
    }
});

strings.setLanguage('sr');

export default strings;