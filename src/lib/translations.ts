export type Lang = "en" | "zh";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      cases: "Case Studies",
      contact: "Contact",
    },
    hero: {
      label: "AI-Powered Influencer Marketing",
      heading: "The only influencer agency run by someone who built 10M followers",
      sub: "Alfie Richards built 'Alfie the Angel' to 10 million followers in China. Now he uses AI and real creator experience to help AI, SaaS, and fintech brands find the exact right creators—and get results that actually move the needle.",
      cta: "Start a Project",
      ctaSecondary: "See Our Work",
    },
    method: {
      label: "Our Method",
      heading: "How We Find Your Perfect Creator Match",
      sub: "Most agencies guess. We use data, AI, and 7 years of creator experience to find the creators who will actually convert for your brand.",
      steps: [
        {
          num: "01",
          title: "AI Discovery",
          desc: "Our systems scan millions of creators across TikTok, Instagram, and YouTube to find hidden gems that match your brand's voice and audience.",
        },
        {
          num: "02",
          title: "Precision Matching",
          desc: "We analyze engagement quality, audience demographics, and content alignment—not just follower counts—to find creators who convert.",
        },
        {
          num: "03",
          title: "Campaign Amplification",
          desc: "From outreach to content direction to performance tracking, we manage the entire partnership to maximize ROI.",
        },
      ],
    },
    services: {
      label: "Services",
      heading: "What We Do",
      sub: "End-to-end influencer marketing for brands that want real results, not vanity metrics.",
      items: [
        {
          num: "01",
          title: "Nano-Creator Headhunting",
          desc: "We find the small, hyper-engaged creators (1K-50K followers) that drive real conversions. These are the needles in the haystack that most agencies miss.",
        },
        {
          num: "02",
          title: "Influencer Strategy",
          desc: "Full campaign planning: from identifying your ideal creator profile to setting KPIs to mapping the content calendar.",
        },
        {
          num: "03",
          title: "Campaign Management",
          desc: "We handle everything: outreach, negotiation, contracts, content review, and performance reporting. You just approve and watch results.",
        },
        {
          num: "04",
          title: "Creator Brand Building",
          desc: "For creators: we help you build a sustainable personal brand, find brand partners, and negotiate better deals.",
        },
      ],
    },
    cases: {
      label: "Case Studies",
      heading: "Real Results for Real Clients",
      sub: "Every number here is verified. Every client is real. This is what happens when you combine AI-powered discovery with genuine creator expertise.",
      items: [
        {
          client: "Timothy Almut",
          title: "From Zero to Consistent Lead Flow",
          desc: "Timothy runs a consultancy serving high-net-worth individuals. We found niche finance creators on LinkedIn and Instagram who spoke directly to his target market.",
          stat: "£3K",
          statLabel: "Monthly Retainer Value",
          tags: ["LinkedIn Creators", "B2B", "Finance"],
        },
        {
          client: "Suhit",
          title: "Post-Exit Brand Building",
          desc: "After selling his company, Suhit wanted to build a personal brand. We connected him with tech and entrepreneurship creators to establish thought leadership.",
          stat: "50K+",
          statLabel: "New Followers in 90 Days",
          tags: ["Personal Brand", "Tech", "LinkedIn"],
        },
        {
          client: "AI SaaS Startup",
          title: "Launch Campaign for New AI Tool",
          desc: "Pre-launch campaign targeting AI enthusiasts and developers. We found niche AI educators on YouTube and Twitter who drove early signups.",
          stat: "2,400",
          statLabel: "Waitlist Signups",
          tags: ["Product Launch", "AI", "YouTube"],
        },
      ],
    },
    creators: {
      label: "Creator Network",
      heading: "Access to 500+ Verified Creators",
      sub: "We've built relationships across every major platform and niche. When you work with us, you tap into a network that took years to cultivate.",
      categories: [
        { icon: "💻", name: "Tech & AI", count: "120+" },
        { icon: "💰", name: "Finance & Crypto", count: "85+" },
        { icon: "💼", name: "Business & SaaS", count: "95+" },
        { icon: "🎨", name: "Design & Creative", count: "65+" },
        { icon: "🏥", name: "Health & Wellness", count: "55+" },
        { icon: "🎓", name: "Education", count: "40+" },
        { icon: "🌍", name: "Lifestyle & Travel", count: "70+" },
        { icon: "🎮", name: "Gaming", count: "50+" },
      ],
    },
    founder: {
      label: "About the Founder",
      heading: "From 10M Followers to Agency Founder",
      paragraphs: [
        "I built 'Alfie the Angel' from zero to 10 million followers across platforms. I've been the creator negotiating with brands, the strategist planning campaigns, and now the agency founder helping others get results.",
        "In 2024, we lost everything—the account, the IP, the whole business. 2024 and 2025 were write-offs. But we're rebuilding. Return Ticket Media is the next chapter.",
        "What makes us different? I've actually done this. I know what creators want, what brands need, and how to bridge that gap. Plus, we use AI to find opportunities that other agencies miss.",
      ],
      stats: [
        { value: "10M+", label: "Followers Built" },
        { value: "500+", label: "Brand Partnerships" },
        { value: "7", label: "Years in Creator Economy" },
      ],
    },
    faq: {
      label: "FAQ",
      heading: "Common Questions",
      items: [
        {
          q: "What makes you different from other influencer agencies?",
          a: "Three things: 1) I've actually been a creator with 10M followers—I know this world from the inside. 2) We use AI to find hidden gem creators that other agencies miss. 3) We focus on results (conversions, signups, sales) not vanity metrics (impressions, reach).",
        },
        {
          q: "How do you find the right creators for our brand?",
          a: "We start with your goals and target audience. Then our AI systems scan millions of creators to find matches based on engagement quality, audience demographics, content alignment, and conversion potential—not just follower counts.",
        },
        {
          q: "What's your pricing model?",
          a: "We typically work on a monthly retainer + performance bonus model. The retainer covers strategy, creator discovery, and management. The bonus ties our compensation to your actual results. We're aligned.",
        },
        {
          q: "Do you work with brands outside of AI/SaaS/Fintech?",
          a: "Our sweet spot is B2B tech, AI, SaaS, and fintech brands targeting educated, professional audiences. If that's you, we're probably a fit. If not, we might refer you to someone better suited.",
        },
        {
          q: "How long until we see results?",
          a: "Most clients see initial traction within 30 days and meaningful results within 90 days. It depends on your goals, budget, and current brand awareness. We'll set realistic expectations upfront.",
        },
      ],
    },
    ctaBanner: {
      heading: "Ready to find your perfect creators?",
      sub: "Whether you're launching a new product, building a personal brand, or scaling your influencer marketing—we can help.",
      cta: "Start a Project",
    },
    footer: {
      tagline: "AI-powered influencer marketing for tech brands.",
      pages: "Pages",
      servicesHeading: "Services",
      connect: "Connect",
      copyright: "© 2026 Return Ticket Media",
      location: "Based in China | Serving Globally",
    },
    popup: {
      label: "Get in Touch",
      heading: "Start Your Project",
      sub: "Tell us about your goals and we'll get back to you within 24 hours.",
      name: "Your name",
      email: "Work email",
      company: "Company",
      message: "Tell us about your project, goals, and timeline...",
      send: "Send Message",
    },
    bottomNav: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "Work",
      cta: "Contact",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于",
      services: "服务",
      cases: "案例",
      contact: "联系",
    },
    hero: {
      label: "AI驱动的网红营销",
      heading: "唯一由拥有1000万粉丝的创作者运营的网红机构",
      sub: "Alfie Richards 在中国将'Alfie the Angel'打造成拥有1000万粉丝的账号。现在他利用AI和真实的创作者经验，帮助AI、SaaS和金融科技品牌找到精准的创作者合作，并带来真正有效的成果。",
      cta: "开启项目",
      ctaSecondary: "查看案例",
    },
    method: {
      label: "我们的方法",
      heading: "我们如何找到完美的创作者匹配",
      sub: "大多数机构靠猜测。我们利用数据、AI和7年的创作者经验，找到真正能为品牌带来转化的创作者。",
      steps: [
        {
          num: "01",
          title: "AI发现",
          desc: "我们的系统扫描TikTok、Instagram和YouTube上的数百万创作者，找到符合品牌声音和受众的隐藏宝石。",
        },
        {
          num: "02",
          title: "精准匹配",
          desc: "我们分析互动质量、受众人口统计和内容契合度——不仅仅是粉丝数量——来找到能转化的创作者。",
        },
        {
          num: "03",
          title: "活动放大",
          desc: "从接触到内容指导到效果追踪，我们管理整个合作关系以最大化投资回报率。",
        },
      ],
    },
    services: {
      label: "服务",
      heading: "我们做什么",
      sub: "为追求真实结果而非虚荣指标的网红营销提供端到端服务。",
      items: [
        {
          num: "01",
          title: "素人创作者猎头",
          desc: "我们找到小而高互动的创作者（1K-50K粉丝）来带动真正的转化。这些是大多数机构会错过的沧海遗珠。",
        },
        {
          num: "02",
          title: "网红策略",
          desc: "完整的活动规划：从识别理想创作者画像到设定KPI再到制定内容日历。",
        },
        {
          num: "03",
          title: "活动管理",
          desc: "我们处理一切：接触、谈判、合同、内容审核和效果报告。您只需批准并观看结果。",
        },
        {
          num: "04",
          title: "创作者品牌打造",
          desc: "面向创作者：我们帮助您建立可持续的个人品牌，找到品牌合作伙伴，并谈判更好的交易。",
        },
      ],
    },
    cases: {
      label: "案例研究",
      heading: "真实客户的真实成果",
      sub: "这里的每个数字都经过验证。每个客户都是真实的。这就是当您将AI驱动的发现与真正的创作者专业知识相结合时会发生的事情。",
      items: [
        {
          client: "Timothy Almut",
          title: "从零到持续的线索流",
          desc: "Timothy经营一家为高净值个人服务的咨询公司。我们在LinkedIn和Instagram上找到了直接面向他目标市场的利基金融创作者。",
          stat: "£3K",
          statLabel: "月度服务价值",
          tags: ["LinkedIn创作者", "B2B", "金融"],
        },
        {
          client: "Suhit",
          title: "退出后的品牌打造",
          desc: "出售公司后，Suhit希望建立个人品牌。我们将他与科技和创业创作者联系起来，以建立思想领导力。",
          stat: "5万+",
          statLabel: "90天内新增粉丝",
          tags: ["个人品牌", "科技", "LinkedIn"],
        },
        {
          client: "AI SaaS初创公司",
          title: "新AI工具发布活动",
          desc: "针对AI爱好者和开发者的发布前活动。我们在YouTube和Twitter上找到了利基AI教育工作者，带来了早期注册。",
          stat: "2,400",
          statLabel: "等候名单注册",
          tags: ["产品发布", "AI", "YouTube"],
        },
      ],
    },
    creators: {
      label: "创作者网络",
      heading: "接触500+已验证创作者",
      sub: "我们在每个主要平台和利基市场都建立了关系。当您与我们合作时，您就接入了一个经过多年培育的网络。",
      categories: [
        { icon: "💻", name: "科技与AI", count: "120+" },
        { icon: "💰", name: "金融与加密货币", count: "85+" },
        { icon: "💼", name: "商业与SaaS", count: "95+" },
        { icon: "🎨", name: "设计与创意", count: "65+" },
        { icon: "🏥", name: "健康与养生", count: "55+" },
        { icon: "🎓", name: "教育", count: "40+" },
        { icon: "🌍", name: "生活方式与旅行", count: "70+" },
        { icon: "🎮", name: "游戏", count: "50+" },
      ],
    },
    founder: {
      label: "关于创始人",
      heading: "从1000万粉丝到机构创始人",
      paragraphs: [
        "我将'Alfie the Angel'从零打造成跨平台的1000万粉丝账号。我曾经是与品牌谈判的创作者，是规划活动的策略师，现在是帮助他人取得成果的机构创始人。",
        "2024年，我们失去了一切——账号、知识产权、整个业务。2024和2025年是空白期。但我们正在重建。Return Ticket Media是新的篇章。",
        "我们的不同之处？我真正做过这件事。我知道创作者想要什么，品牌需要什么，以及如何弥合这一差距。此外，我们使用AI来发现其他机构错过的机会。",
      ],
      stats: [
        { value: "1000万+", label: "粉丝积累" },
        { value: "500+", label: "品牌合作" },
        { value: "7", label: "年创作者经济经验" },
      ],
    },
    faq: {
      label: "常见问题",
      heading: "常见问题解答",
      items: [
        {
          q: "你们与其他网红机构有什么不同？",
          a: "三点：1）我实际上是一位拥有1000万粉丝的创作者——我从内部了解这个世界。2）我们使用AI来发现其他机构会错过的隐藏宝石创作者。3）我们关注结果（转化、注册、销售）而非虚荣指标（曝光、触达）。",
        },
        {
          q: "你们如何为品牌找到合适的创作者？",
          a: "我们从您的目标和目标受众开始。然后我们的AI系统扫描数百万创作者，根据互动质量、受众人口统计、内容契合度和转化潜力——而不仅仅是粉丝数量——来找到匹配项。",
        },
        {
          q: "你们的定价模式是什么？",
          a: "我们通常采用月度服务费+绩效奖金的模式。服务费涵盖策略、创作者发现和管理。奖金将我们的报酬与您的实际结果挂钩。我们是一致的利益共同体。",
        },
        {
          q: "你们是否与AI/SaaS/金融科技以外的品牌合作？",
          a: "我们的最佳点是针对受过教育、专业受众的B2B科技、AI、SaaS和金融科技品牌。如果您是这类客户，我们可能很合适。如果不是，我们可能会推荐更适合的人选。",
        },
        {
          q: "多久能看到结果？",
          a: "大多数客户在30天内看到初步进展，90天内看到有意义的成果。这取决于您的目标、预算和当前品牌知名度。我们会在前期设定现实的期望。",
        },
      ],
    },
    ctaBanner: {
      heading: "准备好找到您的完美创作者了吗？",
      sub: "无论您是推出新产品、打造个人品牌，还是扩大网红营销规模——我们都可以帮助您。",
      cta: "开启项目",
    },
    footer: {
      tagline: "为科技品牌提供的AI驱动网红营销。",
      pages: "页面",
      servicesHeading: "服务",
      connect: "联系我们",
      copyright: "© 2026 Return Ticket Media",
      location: "总部位于中国 | 服务全球",
    },
    popup: {
      label: "联系我们",
      heading: "开启您的项目",
      sub: "告诉我们您的目标，我们将在24小时内回复您。",
      name: "您的姓名",
      email: "工作邮箱",
      company: "公司",
      message: "告诉我们您的项目、目标和时间表...",
      send: "发送消息",
    },
    bottomNav: {
      home: "首页",
      about: "关于",
      services: "服务",
      work: "案例",
      cta: "联系",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
