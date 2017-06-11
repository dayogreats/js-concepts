// CREATE A PRITN FUNCTION
function print(item) {
    // data type checking
    if (item instanceof Array) {
        item.forEach(value => {
            print('   ' + value);
        })

    } else if (item instanceof Object) {
        var keys = Object.keys(item);
        keys.forEach((key) => {
            console.log(key)

            // RECURSION (afunction that calls itself)
            print(item[key]);
        })
    } else {
        console.log('    ' + item);
    }
};


print(science);

var science = {
    Formal: ['Logic', 'Mathematics', 'Mathematical', 'logic Mathematical', 'statistics', 'Theoretical', 'computer science'],

    Cars: { name: "Nissan", type: 2009, color: ['red', 'black', 'blue', 'green'] },

    Chemistry: ['Acid-base', 'Analytical', 'Environmental', 'Inorganic', 'Nuclear', 'Organic', 'Physical', 'Solid-state', 'Supramolecular',
        'Sustainable', 'Theoretical', 'Astrochemistry', 'Biochemistry', 'Crystallography', 'Food chemistry', 'Geochemistry',
        'Materials science', 'Molecular physics', 'Photochemistry', 'Radiochemistry', 'Stereochemistry', 'Surface science'
    ],


    Physics: ['Classical', 'Modern', 'Applied', 'Experimental', 'Theoretical', 'Computational', 'Atomic', 'Condensed matter'],


    Mechanics: ['Molecular', 'Nuclear', 'Particle', 'Plasma', 'Quantum field theory', 'Quantum mechanics', 'Special relativity', 'General relativity',
        'Rheology', 'String theory', 'Thermodynamics'
    ],


    EarthSciences: ['Climatology', 'Ecology', 'Edaphology', 'Environmental science', 'Geodesy', 'Geography', 'Geology', 'Geomorphology', 'Geophysics',
        'Glaciology', 'Hydrology', 'Limnology', 'Meteorology', 'Oceanography', 'Paleoclimatology', 'Paleoecology', 'Palynology',
        'Pedology', 'Volcanology'
    ],


    SpaceScience: ['Astronomy', 'Astrophysics', 'Cosmology', 'Galactic astronomy', 'Planetary geology', 'Planetary science',
        'Stellar astronomy'
    ],

    Life: {
        Biology: ['Anatomy', 'Astrobiology', 'Biochemistry', 'Biogeography', 'Biological', 'engineering', 'Biophysics', 'Behavioral neuroscience',
            'Biotechnology', 'Botany', 'Cell biology', 'Conservation biology', 'Cryobiology', 'Developmental biology', 'Ecology', 'Ethnobiology', 'Ethology', 'Evolutionary biology', 'Genetic', 'Gerontology', 'Immunology', 'Limnology', 'Marine biology', 'Microbiology',
            'Molecular biology', 'Neuroscience', 'Paleontology', 'Parasitology', 'Physiology', 'Radiobiology', 'Soil biology', 'Sociobiology', 'Systematics',
            'Toxicology', 'Zoology'
        ],

        Social: ['Anthropology', 'Archaeology', 'Criminology', 'Demography', 'Economics', 'Geography', 'History', 'International relations',
            'Law', 'Linguistics', 'Pedagogy', 'Political science', 'Psychology', 'Science education', 'Sociology', 'Applied'
        ]
    },
    Engineering: ['Aerospace', 'Agricultural', 'Biological', 'Biomedical', 'Chemical', 'Civil', 'Computer science / engineering', 'Electrical Fire protection',
        'Genetic', 'Industrial Mechanical', 'Military', 'Mining', 'Nuclear', 'Operations research', 'Robotics', 'Software', 'Web'
    ],


    Interdisciplinary: ['Applied physics', 'Artificial intelligence', 'Bioethics', 'Bioinformatics', 'Biomedical engineering', 'Biostatistics',
        'Cognitive science', 'Complex systems', 'Computational linguistics', 'Cultural studies', 'Cybernetics', 'Environmental science',
        'Environmental social science', 'Environmental studies', 'Ethnic studies', 'Evolutionary psychology', 'Forensics',
        'Forestry Library science', 'Mathematical / theoretical biology', 'Mathematical physics', 'Military science', 'Network science',
        'Neural engineering', 'Neuroscience', 'Science studies', 'Scientific modelling', 'Semiotics', 'Sociobiology', 'Statistics',
        'Systems science', 'Urban planning', 'Web science'
    ],

    Philosophy: ['Basic research', 'Citizen science', 'Fringe science', 'Protoscience', 'Pseudoscience', 'Freedom', 'Policy', 'Funding',
        'Method', 'Technoscience'
    ]
};


// instantiate the function
print(science);