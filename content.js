// Arabic Data Source - Expanded for School Management Systems
const ArabicData = {
    // 1. SPLIT NAMES BY GENDER
    maleNames: ['محمد', 'أحمد', 'محمود', 'علي', 'حسن', 'حسين', 'عبدالله', 'يوسف', 'عمر', 'خالد', 'طارق', 'سالم', 'صالح', 'فرج', 'مفتاح'],
    femaleNames: ['فاطمة', 'عائشة', 'مريم', 'زينب', 'نور', 'سعاد', 'هند', 'ليلى', 'سارة', 'خديجة', 'رؤى', 'يقين'],
    lastNames: ['المصري', 'الحداد', 'النجار', 'العبيدي', 'الحاسي', 'الاوجلي', 'المجبري', 'الجازوي', 'البرغثي', 'الورفلي', 'الزوي', 'المسماري', 'العبيدي', 'الترهوني'],
    motherNames: ['خديجة', 'أمينة', 'صالحة', 'نادية', 'سميرة', 'حليمة', 'سلوى'],
    
    companies: ['شركة التقنية الحديثة', 'مؤسسة الأفق', 'مجموعة الرواد', 'شركة الحلول الذكية', 'النظم المتقدمة'],
    cities: ['بنغازي', 'طرابلس', 'مصراتة', 'البيضاء', 'سبها', 'درنة', 'سرت', 'طبرق', 'القاهرة', 'تونس'],
    streets: ['شارع الاستقلال', 'شارع دبي', 'شارع عشرين', 'شارع النيل', 'شارع الوحدة', 'شارع سوريا'],

    phonePrefixes: ['091', '092', '093', '094'],
    
    // School Specific Data
    professions: ['مهندس', 'طبيب', 'معلم', 'محاسب', 'موظف حكومي', 'أعمال حرة', 'محامي', 'ضابط', 'تاجر'],
    nationalities: ['ليبي', 'مصري', 'سوري', 'تونسي', 'أردني', 'سوداني', 'فلسطيني'],
    bloodTypes: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    // subjects: ['لغة عربية', 'رياضيات', 'لغة إنجليزية', 'علوم', 'فيزياء', 'كيمياء', 'تاريخ', 'جغرافيا', 'تربية إسلامية'],
    subjectsData: [
        { ar: 'الرياضيات', en: 'Mathematics', code: 'MATH101' },
        { ar: 'اللغة العربية', en: 'Arabic Language', code: 'ARAB101' },
        { ar: 'الفيزياء', en: 'Physics', code: 'PHYS201' },
        { ar: 'الكيمياء', en: 'Chemistry', code: 'CHEM201' },
        { ar: 'الأحياء', en: 'Biology', code: 'BIOL201' },
        { ar: 'التاريخ', en: 'History', code: 'HIST101' },
        { ar: 'الجغرافيا', en: 'Geography', code: 'GEOG101' },
        { ar: 'اللغة الإنجليزية', en: 'English Language', code: 'ENG101' },
        { ar: 'التربية الإسلامية', en: 'Islamic Education', code: 'ISLM101' },
        { ar: 'الحاسوب', en: 'Computer Science', code: 'CS101' }
    ],
    qualifications: ['بكالوريوس', 'ليسانس', 'ماجستير', 'دكتوراه', 'دبلوم عالي'],
    departments: ['شؤون الطلبة', 'المالية', 'الموارد البشرية', 'الشؤون الإدارية', 'قسم الامتحانات'],
    planNames: ['خطة الرسوم الأساسية', 'رسوم التسجيل المبكر', 'القسط الأول', 'القسط الثاني', 'رسوم الزي المدرسي', 'اشتراك الحافلة'],
    itemTitles: ['رسوم دراسية', 'رسوم امتحانات', 'نشاط لا منهجي', 'كتب دراسية', 'رسوم متفرقة'],
    categoryNames: ['ملاحظة سلوكية', 'تقرير أكاديمي', 'إنذار غياب', 'استدعاء ولي أمر', 'شهادة تفوق', 'متابعة طبية', 'تقرير مالي', 'إشعار إداري'],
    
    getRandom: function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generateDate: function(startYear, endYear) {
        const year = this.getRandomInt(startYear, endYear);
        const month = String(this.getRandomInt(1, 12)).padStart(2, '0');
        const day = String(this.getRandomInt(1, 28)).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },
    
generateData: function() {
        // 🚀 NEW: Scrape existing values from hidden steps to maintain data continuity!
        const getDomValue = (keywords) => {
            const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
            const field = inputs.find(input => {
                const name = (input.name || input.id || input.placeholder || '').toLowerCase();
                return keywords.some(kw => name.includes(kw)) && input.value.trim() !== '';
            });
            return field ? field.value.trim() : null;
        };

        // Check if these fields were already filled in a previous wizard step
        const existingFather = getDomValue(['father', 'أب', 'middle', 'أوسط', 'والد']);
        const existingGrandfather = getDomValue(['grandfather', 'جد']);
        const existingLast = getDomValue(['last', 'عائلة', 'أخير', 'لقب']);

        const isMale = Math.random() > 0.5;
        const fName = isMale ? this.getRandom(this.maleNames) : this.getRandom(this.femaleNames);
        
        // Use existing names if found, otherwise generate new random ones
        const father = existingFather || this.getRandom(this.maleNames);
        const grandfather = existingGrandfather || this.getRandom(this.maleNames);
        const lName = existingLast || this.getRandom(this.lastNames);

        const prefix = this.getRandom(this.phonePrefixes);
        const random7Digits = this.getRandomInt(1000000, 9999999);
        const libyanPhone = `${prefix}${random7Digits}`;

        // 🚀 NEW FIX: Culturally Accurate Guardian Naming
        const isGuardianMale = Math.random() > 0.5;
        
        // Generate independent names for female guardians (Mother, Aunt, etc.)
        const femaleGuardianFather = this.getRandom(this.maleNames);
        const femaleGuardianLast = this.getRandom(this.lastNames);

        // If male, use the exact student's lineage. If female, use the independent lineage.
        const guardianFullName = isGuardianMale 
            ? `${father} ${grandfather} ${lName}` 
            : `${this.getRandom(this.femaleNames)} ${femaleGuardianFather} ${femaleGuardianLast}`;

        const selectedSubject = this.getRandom(this.subjectsData);

        return {
            isMale: isMale, 
            isGuardianMale: isGuardianMale,       
            guardianName: guardianFullName,
            firstName: fName,
            fatherName: father,
            grandfatherName: grandfather,
            motherName: this.getRandom(this.motherNames),
            lastName: lName,
            fullName: `${fName} ${father} ${lName}`,
            email: `user_${this.getRandomInt(1000, 9999)}@example.com`,
            
            // Numbers & IDs
            phone: libyanPhone,
            landline: `021${this.getRandomInt(1000000, 9999999)}`,
            nationalId: `1${this.getRandomInt(10000000000, 99999999999)}`,
            passport: `P${this.getRandomInt(100000, 999999)}`,
            studentId: `STU-${new Date().getFullYear()}-${this.getRandomInt(100, 999)}`,
            
            // Financials
            feeAmount: this.getRandomInt(150, 3000),
            salary: this.getRandomInt(800, 5000),
            discount: this.getRandomInt(10, 50),
            
            // Dates
            dob: this.generateDate(2005, 2018), 
            employmentDate: this.generateDate(2015, 2023),
            genericDate: this.generateDate(2023, 2026),
            
            // Locations & Orgs
            company: this.getRandom(this.companies),
            city: this.getRandom(this.cities),
            address: `عمارة ${this.getRandomInt(1, 50)}، ${this.getRandom(this.streets)}`,
            
            // School Specific Text
            profession: this.getRandom(this.professions),
            nationality: this.getRandom(this.nationalities),
            bloodType: this.getRandom(this.bloodTypes),
            // subject: this.getRandom(this.subjects),
            subjectNameAr: selectedSubject.ar,
            subjectNameEn: selectedSubject.en,
            subjectCode: selectedSubject.code,
            qualification: this.getRandom(this.qualifications),
            department: this.getRandom(this.departments),
            planName: this.getRandom(this.planNames),
            title: this.getRandom(this.itemTitles),
            categoryName: this.getRandom(this.categoryNames),
            
            randomText: 'ملاحظات تجريبية للنظام'
        };
    }
};

// 🚀 Helper function to check if a field is actually visible on screen
function isFieldVisible(el) {
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fillFields') {
        fillAllFields(false); // Normal: Skip filled fields
        sendResponse({ success: true });
    } else if (request.action === 'forceFillFields') {
        fillAllFields(true); // Force: Overwrite existing fields
        sendResponse({ success: true });
    } else if (request.action === 'clearFields') {
        clearAllFields();
        sendResponse({ success: true });
    }
    return true;
});

function fillAllFields(forceOverwrite = false) {
    const data = ArabicData.generateData();
    let filledCount = 0;

    // 1. TEXT AND NUMBER INPUTS
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="date"], input:not([type]), textarea');
    
    inputs.forEach(input => {
        if (!isFieldVisible(input)) return; 
        
        if (!input.readOnly && !input.disabled) {
            if (!forceOverwrite && input.value.trim() !== '') {
                return;
            }

            // 🚀 NEW FIX: Scrape the visual <label> text to make detection 10x smarter!
            let labelText = '';
            if (input.id) {
                const label = document.querySelector(`label[for="${input.id}"]`);
                if (label) labelText = label.innerText.toLowerCase();
            }
            const parentLabel = input.closest('label');
            if (parentLabel) labelText += ' ' + parentLabel.innerText.toLowerCase();

            // Combine HTML attributes AND the visible label text to make our decision
            const fieldName = (input.name || input.id || input.placeholder || labelText || '').toLowerCase();
            let value = data.randomText;

            // --- SMART DETECTION HIERARCHY ---
            if (fieldName.includes('email') || fieldName.includes('بريد') || input.type === 'email') {
                value = data.email;
            } else if (fieldName.includes('mobile') || fieldName.includes('phone') || fieldName.includes('tel') || fieldName.includes('جوال') || fieldName.includes('موبايل') || fieldName.includes('هاتف')) {
                value = data.phone;
            } else if (fieldName.includes('landline') || fieldName.includes('أرضي')) {
                value = data.landline;
            } else if (fieldName.includes('national') || fieldName.includes('رقم قومي') || fieldName.includes('وطني') || fieldName.includes('هوية')) {
                value = data.nationalId;
            } else if (fieldName.includes('passport') || fieldName.includes('جواز')) {
                value = data.passport;
            } else if (fieldName.includes('student_id') || fieldName.includes('رقم قيد') || fieldName.includes('رقم الطالب')) {
                value = data.studentId;
            } else if (fieldName.includes('salary') || fieldName.includes('راتب') || fieldName.includes('مرتب')) {
                value = data.salary;
            } else if (fieldName.includes('discount') || fieldName.includes('خصم') || fieldName.includes('تخفيض')) {
                value = data.discount;
            } else if (fieldName.includes('amount') || fieldName.includes('fee') || fieldName.includes('price') || fieldName.includes('رسوم') || fieldName.includes('مبلغ') || fieldName.includes('سعر')) {
                value = data.feeAmount;
            } else if (fieldName.includes('dob') || fieldName.includes('birth') || fieldName.includes('ميلاد')) {
                value = data.dob;
            } else if (fieldName.includes('hire') || fieldName.includes('employ') || fieldName.includes('تعيين') || fieldName.includes('توظيف')) {
                value = data.employmentDate;
            } else if (input.type === 'date' || fieldName.includes('date') || fieldName.includes('تاريخ')) {
                value = data.genericDate;
            } else if (fieldName.includes('blood') || fieldName.includes('دم') || fieldName.includes('فصيلة')) {
                value = data.bloodType;
            } else if (fieldName.includes('nationality') || fieldName.includes('جنسية')) {
                value = data.nationality;
            } else if (fieldName.includes('profession') || fieldName.includes('job') || fieldName.includes('مهنة') || fieldName.includes('وظيفة')) {
                value = data.profession;
            }
            //  else if (fieldName.includes('subject') || fieldName.includes('مادة') || fieldName.includes('تخصص')) {
            //     value = data.subject;
            // } 
            // 🚀 NEW FIX: Intercept languages and codes BEFORE the generic "Name" check!
            else if (fieldName.includes('english') || fieldName.includes('انجليز')) {
                value = data.subjectNameEn;
            } else if (fieldName.includes('arabic') || fieldName.includes('عرب')) {
                value = data.subjectNameAr;
            } else if (fieldName.includes('code') || fieldName.includes('رمز')) {
                value = data.subjectCode;
            } else if (fieldName.includes('subject') || fieldName.includes('مادة') || fieldName.includes('تخصص')) {
                value = data.subjectNameAr;
            }
            //
            else if (fieldName.includes('qualification') || fieldName.includes('degree') || fieldName.includes('مؤهل') || fieldName.includes('شهادة')) {
                value = data.qualification;
            } else if (fieldName.includes('department') || fieldName.includes('إدارة') || fieldName.includes('قسم')) {
                value = data.department;
            } else if (fieldName.includes('plan') || fieldName.includes('خطة')) {
                value = data.planName;
            } else if (fieldName.includes('title') || fieldName.includes('مسمى')) {
                value = data.title;
            } else if (fieldName.includes('category') || fieldName.includes('report') || fieldName.includes('type') || fieldName.includes('فئة') || fieldName.includes('تقرير') || fieldName.includes('نوع')) {
                value = data.categoryName;
            } else if (fieldName.includes('mother') || fieldName.includes('أم') || fieldName.includes('والدة')) {
                value = data.motherName;
            
            // 🚀 The Guardian Check (Now sees the label "اسم جهة الاتصال")
            } else if (fieldName.includes('guardian') || fieldName.includes('contact') || fieldName.includes('وصي') || fieldName.includes('اتصال') || fieldName.includes('جهة')) {
                value = data.guardianName;
            
            } else if (fieldName.includes('first') || fieldName.includes('أول')) {
                value = data.firstName;
            } else if (fieldName.includes('last') || fieldName.includes('عائلة') || fieldName.includes('أخير') || fieldName.includes('لقب')) {
                value = data.lastName;
            } else if (fieldName.includes('grandfather') || fieldName.includes('جد')) {
                value = data.grandfatherName;
            } else if (fieldName.includes('father') || fieldName.includes('أب') || fieldName.includes('middle') || fieldName.includes('أوسط') || fieldName.includes('والد')) {
                value = data.fatherName;
            } else if (fieldName.includes('name') || fieldName.includes('اسم')) {
                value = data.fullName; 
            } else if (fieldName.includes('company') || fieldName.includes('شركة') || fieldName.includes('مؤسسة')) {
                value = data.company;
            } else if (fieldName.includes('city') || fieldName.includes('مدينة')) {
                value = data.city;
            } else if (fieldName.includes('address') || fieldName.includes('عنوان') || fieldName.includes('سكن')) {
                value = data.address;
            } else {
                if (input.type === 'number') {
                    const max = input.max ? parseInt(input.max) : 9999;
                    const min = input.min ? parseInt(input.min) : 1;
                    value = Math.floor(Math.random() * (max - min + 1)) + min;
                } else if (input.type === 'date') {
                    value = data.genericDate;
                } else if (input.type === 'email') {
                    value = `custom_${Math.floor(Math.random() * 1000)}@example.com`;
                } else {
                    const rawName = fieldName || 'حقل_مجهول';
                    const cleanName = rawName.substring(0, 15).replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '_'); 
                    const randomId = Math.floor(Math.random() * 1000);
                    value = `قيمة مخصصة لـ ${cleanName} (${randomId})`;
                }
            }

            input.value = value;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            filledCount++;
        }
    });

    // 2. DROPDOWNS (SELECTS)
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        if (!isFieldVisible(select)) return; 
        
        if (!select.disabled && select.options.length > 1) {
            if (!forceOverwrite && select.selectedIndex > 0) {
                return; 
            }

            // 🚀 NEW FIX: Scrape labels for dropdowns too!
            let labelText = '';
            if (select.id) {
                const label = document.querySelector(`label[for="${select.id}"]`);
                if (label) labelText = label.innerText.toLowerCase();
            }
            const parentLabel = select.closest('label');
            if (parentLabel) labelText += ' ' + parentLabel.innerText.toLowerCase();

            const selectName = (select.name || select.id || select.className || labelText || '').toLowerCase();
            let optionSelected = false;

            if (selectName.includes('gender') || selectName.includes('sex') || selectName.includes('جنس')) {
                for (let i = 0; i < select.options.length; i++) {
                    const optText = select.options[i].text.toLowerCase();
                    const optVal = select.options[i].value.toLowerCase();
                    
                    if (data.isMale && (optText.includes('ذكر') || optText.includes('male') || optVal === 'm' || optVal === 'male')) {
                        select.selectedIndex = i; optionSelected = true; break;
                    } 
                    else if (!data.isMale && (optText.includes('أنثى') || optText.includes('انثى') || optText.includes('female') || optVal === 'f' || optVal === 'female')) {
                        select.selectedIndex = i; optionSelected = true; break;
                    }
                }
            }
            else {
                let isRelationDropdown = selectName.includes('relation') || selectName.includes('قرابة') || selectName.includes('صلة') || selectName.includes('type');
                
                if (!isRelationDropdown) {
                    for (let i = 0; i < select.options.length; i++) {
                        const textToCheck = select.options[i].text.replace(/أ|إ|آ/g, 'ا').toLowerCase();
                        if (textToCheck.includes('اب') || textToCheck.includes('ام') || textToCheck.includes('والد') || textToCheck.includes('اخ') || textToCheck.includes('عم') || textToCheck.includes('خال')) {
                            isRelationDropdown = true; break;
                        }
                    }
                }

                if (isRelationDropdown) {
                    for (let i = 0; i < select.options.length; i++) {
                        const rawText = select.options[i].text.replace(/أ|إ|آ/g, 'ا');
                        const normalizedText = rawText.replace(/[^\u0600-\u06FFa-zA-Z]/g, ' ').toLowerCase();
                        const words = normalizedText.split(/\s+/).filter(w => w.length > 0);
                        
                        const isMaleOption = words.some(w => ['اب', 'الاب', 'والد', 'الوالد', 'اخ', 'الاخ', 'عم', 'العم', 'خال', 'الخال', 'father'].includes(w));
                        const isFemaleOption = words.some(w => ['ام', 'الام', 'والدة', 'الوالدة', 'اخت', 'الاخت', 'عمة', 'العمة', 'خالة', 'الخالة', 'mother'].includes(w));

                        if (data.isGuardianMale && isMaleOption) {
                            select.selectedIndex = i; optionSelected = true; break;
                        } else if (!data.isGuardianMale && isFemaleOption) {
                            select.selectedIndex = i; optionSelected = true; break;
                        }
                    }

                    if (!optionSelected) {
                        for (let i = 0; i < select.options.length; i++) {
                            const fallbackText = select.options[i].text.replace(/أ|إ|آ/g, 'ا').toLowerCase();
                            if (data.isGuardianMale && (fallbackText.includes('اب') || fallbackText.includes('والد') || fallbackText.includes('اخ') || fallbackText.includes('عم'))) {
                                select.selectedIndex = i; optionSelected = true; break;
                            } else if (!data.isGuardianMale && (fallbackText.includes('ام') || fallbackText.includes('والدة') || fallbackText.includes('اخت') || fallbackText.includes('عمة'))) {
                                select.selectedIndex = i; optionSelected = true; break;
                            }
                        }
                    }

                    // Force safety: If it IS a relation dropdown, do NOT let it randomly guess!
                    if (!optionSelected) {
                        optionSelected = true; 
                    }
                }
            }

            if (!optionSelected) {
                const randomIndex = Math.floor(Math.random() * (select.options.length - 1)) + 1;
                select.selectedIndex = randomIndex;
            }

            select.dispatchEvent(new Event('change', { bubbles: true }));
            filledCount++;
        }
    });

    // 3. CHECKBOXES
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (!isFieldVisible(checkbox)) return; 
        if (!checkbox.disabled) {
            if (forceOverwrite || !checkbox.checked) {
                checkbox.checked = Math.random() > 0.5;
                if (checkbox.checked || forceOverwrite) {
                    checkbox.dispatchEvent(new Event('change', { bubbles: true }));
                    filledCount++;
                }
            }
        }
    });

    console.log(`🎭 Arabic Fake Filler: تم تعبئة/تحديث ${filledCount} حقول.`);
}

function clearAllFields() {
    let clearedCount = 0;
    
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="date"], input:not([type]), textarea');
    inputs.forEach(input => {
        if (!isFieldVisible(input)) return;
        if (!input.readOnly && !input.disabled && input.type !== 'submit' && input.type !== 'button') {
            input.value = '';
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            clearedCount++;
        }
    });
    

    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        if (!isFieldVisible(select)) return;
        if (!select.disabled) {
            select.selectedIndex = 0;
            select.dispatchEvent(new Event('change', { bubbles: true }));
            clearedCount++;
        }
    });

    // Excluded radio buttons here as well
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(input => {
        if (!isFieldVisible(input)) return;
        if (!input.disabled) {
            input.checked = false;
            input.dispatchEvent(new Event('change', { bubbles: true }));
            clearedCount++;
        }
    });

    console.log(`🎭 Arabic Fake Filler: تم مسح ${clearedCount} حقول.`);
}