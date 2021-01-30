var list = [
    {'title': 'درس برمجة تطبيقات الأندرويد', 'description': 'سوف تتعلم من خلال هذا المسار طريقة برمجة تطبيقات لأجهزة الآندرويد. تم تطوير نظام تشغيل الآندرويد من قبل شركة Google.', 'url': 'https://beta.barmej.com/tracks/%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%86%D8%AF%D8%B1%D9%88%D9%8A%D8%AF-Android', 'color': '#3d8929'}, 
    
    {'title': 'برمجة المواقع مع Django', 'description': 'في هذا المسار ستتعلم برمجة المواقع و الخوادم باستخدام لغة Python ونظام Django لبرمجة تطبيقات المواقع.', 'url': 'https://beta.barmej.com/tracks/%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9-%D9%85%D8%B9-%D8%AC%D8%A7%D9%86%D8%BA%D9%88-Django', 'color': '#8803b5'},
    
    {'title': 'برمجة تطبيقات الآيفون مع Swift', 'description': 'يشرح هذا المسار طريقة برمجة التطبيقات لأجهزة الآيفون والتي تعمل على نظام iOS الذي تم تطويره من قبل شركة Apple.', 'url': 'https://beta.barmej.com/tracks/%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%8A%D9%81%D9%88%D9%86-%D9%85%D8%B9-%D8%B3%D9%88%D9%8A%D9%81%D8%AA-Swift', 'color': '#d64d48'},
]

// قيمة تعبر عن الدرس المعروض حاليا على صفحة الموقع
var current_course = 0;

function prev() {
    console.log('الدرس السابق');
    
    // يتم إنقاص القيمة للوصول إلى الدرس السابق
    current_course--;
    if (current_course < 0)
        current_course = list.length - 1
    
    // هنا نقوم بتعيين بيانات الدرس إلى كل من عناصر الصفحة
    document.getElementById("dars_id").style.background = list[current_course].color;
    document.getElementById("dars_id").innerHTML = list[current_course].title;
    document.getElementById("desc_id").innerHTML = list[current_course].description;
    document.getElementById("url_id").href = list[current_course].url;
}
            
function next() {
    console.log('الدرس اللاحق');
    
    // يتم إضافة القيمة للوصول إلى الدرس اللاحق
    current_course++;
    if (current_course >= list.length)
        current_course = 0
    
    // هنا نقوم بتعيين بيانات الدرس إلى كل من عناصر الصفحة
    document.getElementById("dars_id").style.background = list[current_course].color;
    document.getElementById("dars_id").innerHTML = list[current_course].title;
    document.getElementById("desc_id").innerHTML = list[current_course].description;
    document.getElementById("url_id").href = list[current_course].url;
}