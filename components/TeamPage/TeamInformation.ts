interface TeamMember {
    title: string;
    names: string | string[]; // 单人用 string，多人用 string[]
  }
  
  const team: TeamMember[] = [
    {
      title: "Executive Director",
      names: "Ashfaq Ishaq, Ph.D.",
    },
    {
      title: "Director of Community Relations",
      names: "Katty Guerami",
    },
    {
      title: "Social Media Manager",
      names: "Alister Nelson",
    },
    {
      title: "Communications Officer",
      names: ["Faith Antonioni", "Jennie Zhao"],
    },
    {
      title: "East Asia Program Officer",
      names: "Yijun Guo",
    },
    {
      title: "Country Officer France",
      names: "Kathrine Harold",
    },
    {
      title: "Country Officer India",
      names: "Likitha Sree Yarabarla",
    },
    {
      title: "ChildArt Magazine: Managing Editor",
      names: "Ana Alberdi",
    },
    {
      title: "Design Directors",
      names: ["Tracey Bien-Aime", "Jia Yu"],
    },
    {
      title: "Graphic Artists",
      names: ["Yixin Jiang", "Qianzi Luo", "Hanyin Ma"],
    },
    {
      title: "UX/UI Manager",
      names: "Sarita Lewis",
    },
    {
      title: "UX/UI Designers",
      names: ["Olivia Chen", "Daniela Jimenez", "Annie Ju"],
    },
    {
      title: "IT & Websites Manager",
      names: "Noah Zaranka",
    },
    {
      title: "Web Developers",
      names: ["Kayle Hackett", "Lexie Liu", "Jiayun Yan", "Emma Wang"],
    },
  ];
  
  export default team;
  