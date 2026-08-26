// Arabic Data Source - Expanded for School Management Systems
const ArabicData = {
    // 1. SPLIT NAMES BY GENDER
    maleNames: ['محمد', 'أحمد', 'محمود', 'علي', 'حسن', 'حسين', 'عبدالله', 'يوسف', 'عمر', 'خالد', 'طارق', 'سالم', 'صالح', 'فرج', 'مفتاح'],
    femaleNames: ['فاطمة', 'عائشة', 'مريم', 'زينب', 'نور', 'سعاد', 'هند', 'ليلى', 'سارة', 'خديجة', 'رؤى', 'يقين'],
    lastNames: ['المصري', 'الحداد', 'النجار', 'الهاشمي', 'العنزي', 'الدوسري', 'المطيري', 'الشمري', 'العتيبي', 'الورفلي', 'الزوي', 'المسماري', 'العبيدي', 'الترهوني'],
    motherNames: ['خديجة', 'أمينة', 'صالحة', 'نادية', 'سميرة', 'حليمة', 'سلوى'],
    
    companies: ['شركة التقنية الحديثة', 'مؤسسة الأفق', 'مجموعة الرواد', 'شركة الحلول الذكية', 'النظم المتقدمة'],
    cities: ['بنغازي', 'طرابلس', 'مصراتة', 'البيضاء', 'سبها', 'درنة', 'سرت', 'طبرق', 'القاهرة', 'تونس'],
    streets: ['شارع الاستقلال', 'شارع دبي', 'شارع عشرين', 'شارع النيل', 'شارع الوحدة', 'شارع سوريا'],
    
    // School Specific Data
    professions: ['مهندس', 'طبيب', 'معلم', 'محاسب', 'موظف حكومي', 'أعمال حرة', 'محامي', 'ضابط', 'تاجر'],
    nationalities: ['ليبي', 'مصري', 'سوري', 'تونسي', 'أردني', 'سوداني', 'فلسطيني'],
    bloodTypes: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    subjects: ['لغة عربية', 'رياضيات', 'لغة إنجليزية', 'علوم', 'فيزياء', 'كيمياء', 'تاريخ', 'جغرافيا', 'تربية إسلامية'],
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
        // 50% chance the student is male or female
        const isMale = Math.random() > 0.5;
        const fName = isMale ? this.getRandom(this.maleNames) : this.getRandom(this.femaleNames);
        
        // Father and Grandfather MUST be from maleNames
        const father = this.getRandom(this.maleNames);
        const grandfather = this.getRandom(this.maleNames);
        const lName = this.getRandom(this.lastNames);

        return {
            isMale: isMale, // <--- 🚀 NEW: We save the gender state here!
            firstName: fName,
            fatherName: father,
            grandfatherName: grandfather,
            motherName: this.getRandom(this.motherNames),
            lastName: lName,
            fullName: `${fName} ${father} ${lName}`,
            email: `user_${this.getRandomInt(1000, 9999)}@example.com`,
            
            // Numbers & IDs
            phone: `09${this.getRandomInt(10000000, 99999999)}`,
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
            subject: this.getRandom(this.subjects),
            qualification: this.getRandom(this.qualifications),
            department: this.getRandom(this.departments),
            planName: this.getRandom(this.planNames),
            title: this.getRandom(this.itemTitles),
            categoryName: this.getRandom(this.categoryNames),
            
            randomText: 'ملاحظات تجريبية للنظام'
        };
    }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fillFields') {
        fillAllFields();
        sendResponse({ success: true });
    } else if (request.action === 'clearFields') {
        clearAllFields();
        sendResponse({ success: true });
    }
    return true;
});

function fillAllFields() {
    const data = ArabicData.generateData();
    let filledCount = 0;

    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="date"], input:not([type]), textarea');
    
    inputs.forEach(input => {
        if (!input.readOnly && !input.disabled) {
            const fieldName = (input.name || input.id || input.placeholder || '').toLowerCase();
            let value = data.randomText;

            // --- SMART DETECTION HIERARCHY ---
            if (fieldName.includes('email') || fieldName.includes('بريد') || input.type === 'email') {
                value = data.email;
            } else if (fieldName.includes('mobile') || fieldName.includes('phone') || fieldName.includes('tel') || fieldName.includes('جوال') || fieldName.includes('موبايل')) {
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
            } else if (fieldName.includes('subject') || fieldName.includes('مادة') || fieldName.includes('تخصص')) {
                value = data.subject;
            } else if (fieldName.includes('qualification') || fieldName.includes('degree') || fieldName.includes('مؤهل') || fieldName.includes('شهادة')) {
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
                // On-the-go fallback logic
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

// 2. FILL DROPDOWNS (Select) with Smart Gender Detection
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        if (!select.disabled && select.options.length > 1) {
            const selectName = (select.name || select.id || select.className || '').toLowerCase();
            let optionSelected = false;

            // Check if this dropdown is for Gender
            if (selectName.includes('gender') || selectName.includes('sex') || selectName.includes('جنس')) {
                // Loop through the dropdown options to find the matching gender
                for (let i = 0; i < select.options.length; i++) {
                    const optText = select.options[i].text.toLowerCase();
                    const optVal = select.options[i].value.toLowerCase();
                    
                    // Look for Male keywords
                    if (data.isMale && (optText.includes('ذكر') || optText.includes('male') || optVal === 'm' || optVal === 'male')) {
                        select.selectedIndex = i;
                        optionSelected = true;
                        break;
                    } 
                    // Look for Female keywords
                    else if (!data.isMale && (optText.includes('أنثى') || optText.includes('انثى') || optText.includes('female') || optVal === 'f' || optVal === 'female')) {
                        select.selectedIndex = i;
                        optionSelected = true;
                        break;
                    }
                }
            }

            // If it's NOT a gender field, or we couldn't find a matching word, pick randomly
            if (!optionSelected) {
                const randomIndex = Math.floor(Math.random() * (select.options.length - 1)) + 1;
                select.selectedIndex = randomIndex;
            }

            select.dispatchEvent(new Event('change', { bubbles: true }));
            filledCount++;
        }
    });

    // Checkboxes only (Radios excluded based on previous request)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (!checkbox.disabled) {
            checkbox.checked = Math.random() > 0.5;
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
            filledCount++;
        }
    });

    console.log(`🎭 Arabic Fake Filler: تم تعبئة ${filledCount} حقول بنجاح.`);
}

function clearAllFields() {
    let clearedCount = 0;
    
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="date"], input:not([type]), textarea');
    inputs.forEach(input => {
        if (!input.readOnly && !input.disabled && input.type !== 'submit' && input.type !== 'button') {
            input.value = '';
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            clearedCount++;
        }
    });

    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        if (!select.disabled) {
            select.selectedIndex = 0;
            select.dispatchEvent(new Event('change', { bubbles: true }));
            clearedCount++;
        }
    });

    // Excluded radio buttons here as well
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(input => {
        if (!input.disabled) {
            input.checked = false;
            input.dispatchEvent(new Event('change', { bubbles: true }));
            clearedCount++;
        }
    });

    console.log(`🎭 Arabic Fake Filler: تم مسح ${clearedCount} حقول.`);
}