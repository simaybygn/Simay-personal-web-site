export interface DataType {
    email?:string;
    tel?:string;
    adres?:string;
    firma?:string;
    aciklama?:string;
    tarih?:string;
    pozisyon?:string;
    cols?:number;
    rows?:number;
    color?:string;
    skill?:string;
 

}

export const ContactDetailsData:DataType[]=[
    {
        email:"simay.bygn@outlook.com",tel:"0535 608 8784",adres:"Kartal/İSTANBUL", color: 'lightblue'
    }
];
// export const EducationData:DataType[]=[
//     {adres:"Kocaeli/TURKEY",firma:"Kocaeli Unıversıty",pozisyon:"Electronic and Communication Engineering",tarih:"September-2019/..."},
//     {adres:"Hatay/TURKEY",firma:"Hüseyin Özbuğday Anatolian High School",tarih:"September-2015/June-2019"}
// ];
// export const EmploymentData:DataType[]=[
//     {adres:"Istanbul/TURKEY",firma:"Ecodation Yazılım Teknolojileri ",pozisyon:"Short-term Intern",aciklama:"Designed 3 different mobile applications using ionic.Support was provided in the ...",tarih:"09.08.2021/29.08.2021"},
//     {adres:"Istanbul/TURKEY",firma:"Acıbadem Technology ",pozisyon:"Long-term Intern",aciklama:"Angular.......",tarih:"04.07.2022/..."}
// ];
export const SkıllsData: DataType[]=[{skill:"English"},{skill:"C Programming"},{skill:"C# Programming"},{skill:"Html,Css"},{skill:"App development with ionic"},{skill:"Angular"}];
export const CourseData:DataType[]=[
    {firma:"Türk Hava Kurumu Unıversity ",aciklama:"Python Programming Camp",tarih:"2021"},
    {firma:"Badiworks ",aciklama:"Engineer Summit",tarih:"2021"},
    {firma:"Ecodation Yazılım Teknolojileri ",aciklama:"Mobile Programming Course",tarih:"2021"},
    {firma:"Morfo Danışmanlık ",aciklama:"Effective Communication Skills",tarih:"2022"},
    {firma:"Morfo Danışmanlık ",aciklama:"Presentation Skills Training",tarih:"2022"}
];
export const ActivitiesData:DataType[]=[
    {adres:"Kocaeli/TURKEY",pozisyon:"Executive Board Member",firma:"Çağdaş Yaşamı Destekleme Derneği",aciklama:"New projects and activities are organized taking into account the wishes of the students",tarih:"September-2020/..."},
    {adres:"Kocaeli/TURKEY",pozisyon:"Coordinator",firma:"Genç Girişimciler Kulübü",aciklama:"Speakers and sponsors to participate in the 'Mevzu Kadınsa' symposium were determined and the speakers were hosted",tarih:"03.2020"},
    {adres:"Kocaeli/TURKEY",pozisyon:"English Empowerment Project",firma:"Çağdaş Yaşamı Destekleme Derneği",aciklama:"For 1 year,video calls were made with American students to support my English language development",tarih:"September-2020/June-2021"},
    {adres:"Sakarya/TURKEY",pozisyon:"23.Türkan Saylan Youth Convention",firma:"Çağdaş Yaşamı Destekleme Derneği",aciklama:"Projects were developed on the development plans determined by the United Nations",tarih:"6 August-2020/8 August-2021"},
    {adres:"Kocaeli/TURKEY",pozisyon:"Vice President",firma:"Çağdaş Yaşamı Destekleme Derneği",aciklama:"New projects and activities are organized taking into account the wishes of the students",tarih:"September-2021/..."},
    {adres:"Kocaeli/TURKEY",pozisyon:"Mentoring Project",firma:"Çağdaş Yaşamı Destekleme Derneği",aciklama:"For about 1 year, I worked with my mentor on issues such as stress management, communication skills, and CV preparation.",tarih:"November-2021/June-2022"}
];
export const HobbiesData:any[]=["Playing electric and acoustic guitar","Photography"];
