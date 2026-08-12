"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import logoImg from "../public/lh-img-0.png"
import heroImg from "../public/hero-image.png"
import wordIcon from "../public/Microsoft_Office_Word_(2025–present).svg.webp"
import excelIcon from "../public/Microsoft_Office_Excel_(2025–present).svg"
import gmailIcon from "../public/Gmail_icon_(2020).svg.webp"
import outlookIcon from "../public/Microsoft_Office_Outlook_(2018–2024).svg.webp"
import zaloIcon from "../public/zalo.png"
import larkIcon from "../public/Lark_Suite_logo_2022.png"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  MessageCircle,
  Bird,
  ShieldCheck,
  Activity,
  Database,
  Search,
  Users,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Clock,
  PlaySquare,
  Package,
  Layers,
  Zap,
  BarChart,
  User
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"
import SlideEffect from "@/components/slide-effect"
import TechCarousel from "@/components/tech-carousel"
import FeatureBadge from "@/components/feature-badge"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Image src={logoImg} alt="Liên Hoa Group Logo" className="h-8 w-auto object-contain" priority />
              <span className="font-bold text-xl tracking-tight">Liên Hoa Group</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Tính năng
              </Link>
              <Link href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Giải pháp
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Bảng giá
              </Link>
              <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Liên hệ
              </Link>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors w-9 h-9 flex items-center justify-center"
              >
                <Sun className="h-5 w-5 transition-all dark:hidden" />
                <Moon className="h-5 w-5 transition-all hidden dark:block" />
                <span className="sr-only">Switch theme</span>
              </button>
              <Button variant="ghost" className="font-medium">
                Đăng nhập
              </Button>
              <Button className="font-semibold shadow-md shadow-primary/20 rounded-full px-6">
                Đăng ký dùng thử
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors w-9 h-9 flex items-center justify-center"
              >
                <Sun className="h-5 w-5 transition-all dark:hidden" />
                <Moon className="h-5 w-5 transition-all hidden dark:block" />
                <span className="sr-only">Switch theme</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-muted-foreground hover:text-foreground"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b px-4 py-4 space-y-4">
            <Link href="#features" className="block text-base font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Tính năng
            </Link>
            <Link href="#solutions" className="block text-base font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Giải pháp
            </Link>
            <Link href="#pricing" className="block text-base font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Bảng giá
            </Link>
            <Link href="#contact" className="block text-base font-medium text-foreground py-2" onClick={() => setMobileMenuOpen(false)}>
              Liên hệ
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-center">
                Đăng nhập
              </Button>
              <Button className="w-full justify-center rounded-full">
                Đăng ký dùng thử
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-24 pb-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            {/* Floating Avatars */}
            <div className="absolute left-[5%] md:left-[10%] top-[10%] hidden lg:block animate-float" style={{ animationDelay: '0s' }}>
              <div className="relative w-16 h-16 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-[3px] flex items-center justify-center border border-gray-100">
                <div className="w-full h-full rounded-full bg-[#E8F5E9] flex items-center justify-center overflow-hidden">
                  <User className="w-8 h-8 text-[#4CAF50] mt-3" />
                </div>
                {/* Small notification badge */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#212121] rounded-full border-[2px] border-white flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[3px] border-l-transparent border-t-[5px] border-t-white border-r-[3px] border-r-transparent"></div>
                </div>
              </div>
            </div>

            <div className="absolute right-[5%] md:right-[10%] top-[5%] hidden lg:block animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="relative w-20 h-20 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-[4px] flex items-center justify-center border border-gray-100">
                <div className="w-full h-full rounded-full bg-[#FFEBEE] flex items-center justify-center overflow-hidden">
                  <User className="w-10 h-10 text-[#F44336] mt-3" />
                </div>
              </div>
            </div>

            <div className="absolute right-[12%] md:right-[15%] bottom-[5%] hidden lg:block animate-float" style={{ animationDelay: '0.7s' }}>
              <div className="relative w-14 h-14 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-[3px] flex items-center justify-center border border-gray-100">
                <div className="w-full h-full rounded-full bg-[#ECEFF1] flex items-center justify-center overflow-hidden">
                  <User className="w-7 h-7 text-[#607D8B] mt-2" />
                </div>
              </div>
            </div>

            <SlideEffect>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-background/80 backdrop-blur-sm shadow-sm text-sm font-medium text-foreground mx-auto">
                <Layers className="h-4 w-4 text-primary" />
                LiOne FOR E-commerce
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </SlideEffect>

            <SlideEffect delay={0.1}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.15]">
                Công cụ quản trị & vận hành <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Doanh nghiệp TMĐT toàn diện</span>
              </h1>
            </SlideEffect>

            <SlideEffect delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                LiOne giúp doanh nghiệp số hóa, kết nối và quản lý toàn bộ hoạt động trên nền tảng duy nhất.
              </p>
            </SlideEffect>

            <SlideEffect delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold shadow-lg shadow-primary/25 w-full sm:w-auto">
                  Đăng ký dùng thử
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-semibold w-full sm:w-auto hover:bg-accent">
                  Xem bảng giá
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> Dùng thử miễn phí
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> Triển khai trong ngày
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> Huỷ bất kỳ lúc nào
                </div>
              </div>
            </SlideEffect>

            <SlideEffect delay={0.4}>
              <div className="mt-16 mx-auto max-w-5xl relative">
                <div className="relative rounded-2xl border bg-card shadow-2xl overflow-hidden">
                  <Image 
                    src={heroImg} 
                    alt="LiOne Dashboard Interface" 
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

            </SlideEffect>
          </div>
        </section>

        {/* Logos Section - Seamless Marquee */}
        <section className="py-12 border-y bg-muted/30 overflow-hidden relative">
          <div className="container mx-auto px-4 mb-6">
            <p className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Thay thế công cụ thủ công
            </p>
          </div>

          <div className="overflow-hidden w-full">
            <div
              className="flex items-center w-max"
              style={{ animation: 'marquee-track 18s linear infinite' }}
            >
              {/* Original set */}
              {/* Word */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70">
                <Image src={wordIcon} alt="Word" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold tracking-tight">Word</span>
              </div>
              {/* Excel */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70">
                <Image src={excelIcon} alt="Excel" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold tracking-tight">Excel</span>
              </div>
              {/* Gmail */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70">
                <Image src={gmailIcon} alt="Gmail" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold tracking-tight">Gmail</span>
              </div>
              {/* Outlook */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70">
                <Image src={outlookIcon} alt="Outlook" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold tracking-tight">Outlook</span>
              </div>
              {/* Zalo */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70">
                <Image src={zaloIcon} alt="Zalo" className="h-8 w-8 object-contain rounded-full" />
                <span className="text-2xl font-bold tracking-tight">Zalo</span>
              </div>
              {/* Lark */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70">
                <Image src={larkIcon} alt="Lark" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold tracking-tight">Lark</span>
              </div>
              {/* Exact duplicate for seamless loop */}
              {/* Word */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70" aria-hidden="true">
                <Image src={wordIcon} alt="Word" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold tracking-tight">Word</span>
              </div>
              {/* Excel */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70" aria-hidden="true">
                <Image src={excelIcon} alt="Excel" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold tracking-tight">Excel</span>
              </div>
              {/* Gmail */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70" aria-hidden="true">
                <Image src={gmailIcon} alt="Gmail" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold tracking-tight">Gmail</span>
              </div>
              {/* Outlook */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70" aria-hidden="true">
                <Image src={outlookIcon} alt="Outlook" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold tracking-tight">Outlook</span>
              </div>
              {/* Zalo */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70" aria-hidden="true">
                <Image src={zaloIcon} alt="Zalo" className="h-8 w-8 object-contain rounded-full" />
                <span className="text-2xl font-bold tracking-tight">Zalo</span>
              </div>
              {/* Lark */}
              <div className="flex items-center gap-3 shrink-0 mx-16 opacity-70" aria-hidden="true">
                <Image src={larkIcon} alt="Lark" className="h-8 w-8 object-contain" />
                <span className="text-2xl font-bold tracking-tight">Lark</span>
              </div>
            </div>
          </div>


          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
        </section>

        {/* "Tại sao chọn chúng tôi" Section */}
        <section id="features" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <SlideEffect>
                <div className="space-y-6">
                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">Tại sao chọn chúng tôi</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                    Nhiều năm kinh nghiệm phát triển <span className="text-primary">công cụ thương mại xuyên biên giới</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    DAMI đồng hành cùng người bán TikTok Shop bằng một hệ thống kết nối KOL bài bản, an toàn và dễ mở rộng, giúp đội ngũ vận hành hiệu quả hơn mà vẫn giữ được sự kiểm soát.
                  </p>
                </div>
              </SlideEffect>
              <div className="space-y-8">
                <SlideEffect delay={0.1}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Hiệu quả kết nối tối đa</h3>
                      <p className="text-muted-foreground">Kết nối KOL thông qua API chính thức của TikTok Shop, giúp vận hành ổn định, an toàn và liên tục. Dữ liệu được tinh lọc sẵn để đội ngũ chọn đúng KOL nhanh hơn và giảm đáng kể thao tác thủ công.</p>
                    </div>
                  </div>
                </SlideEffect>
                <SlideEffect delay={0.2}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Theo dõi toàn quy trình</h3>
                      <p className="text-muted-foreground">Từ kết nối, gửi mẫu đến theo dõi hợp đồng và báo cáo, mọi bước đều nằm trong cùng một luồng làm việc. Điều đó giúp nhóm của bạn nhìn rõ tiến độ, trách nhiệm và kết quả mà không cần ghép nhiều công cụ rời rạc.</p>
                    </div>
                  </div>
                </SlideEffect>
                <SlideEffect delay={0.3}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Database className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Vận hành dựa trên dữ liệu</h3>
                      <p className="text-muted-foreground">Kế hoạch, trạng thái mẫu hàng, hiệu suất video và dữ liệu đơn hàng được hiển thị rõ ràng trong một nơi. Nhờ đó bạn có thể ra quyết định nhanh hơn, tối ưu ngân sách tốt hơn và mở rộng chiến dịch tự tin hơn.</p>
                    </div>
                  </div>
                </SlideEffect>
              </div>
            </div>
          </div>
        </section>

        {/* "Tính năng nổi bật" Section */}
        <section id="solutions" className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <SlideEffect>
                <div className="space-y-6">
                  <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1 font-medium tracking-wide">TÍNH NĂNG NỔI BẬT #1</Badge>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                    Tự động khoanh vùng KOL tiềm năng
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Thiết lập bộ lọc thông minh để nhanh chóng xác định nhóm KOL phù hợp nhất cho từng chiến dịch.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Lọc theo ngành hàng, thị trường và mức độ tương tác</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Phân nhóm KOL theo độ phù hợp để ưu tiên tiếp cận</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Cập nhật dữ liệu liên tục để phát hiện KOL mới</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Giảm đáng kể thời gian tìm kiếm thủ công</span>
                    </li>
                  </ul>
                </div>
              </SlideEffect>
              
              <SlideEffect delay={0.2}>
                <div className="rounded-2xl border shadow-xl bg-card p-6 flex flex-col gap-6">
                   <div className="flex justify-between items-start mb-2">
                     <h4 className="font-semibold text-lg">Bộ lọc KOL thông minh</h4>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div> Cập nhật liên tục
                     </div>
                   </div>
                   
                   <div className="flex flex-wrap gap-2">
                     <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-3 py-1">Làm đẹp</Badge>
                     <Badge variant="outline" className="text-muted-foreground px-3 py-1">Thời trang</Badge>
                     <Badge variant="outline" className="text-muted-foreground px-3 py-1">Sức khỏe</Badge>
                     <Badge variant="outline" className="text-muted-foreground px-3 py-1">Lifestyle</Badge>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 mt-2">
                     {[
                       { name: "@linh_beauty", meta: "2.3M followers • Beauty", icon: "💅" },
                       { name: "@beauty_han", meta: "1.1M followers • Beauty", icon: "✨" },
                       { name: "@mai_skin", meta: "890K followers • Skincare", icon: "🧴" },
                       { name: "@natural_glow", meta: "670K followers • Organic care", icon: "🌿" }
                     ].map((item, idx) => (
                       <div key={idx} className="flex gap-3 items-center p-3 rounded-xl border bg-muted/20 hover:bg-muted/40 transition-colors">
                         <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-lg border shadow-sm shrink-0">
                           {item.icon}
                         </div>
                         <div className="min-w-0">
                           <p className="font-medium text-sm truncate">{item.name}</p>
                           <p className="text-xs text-muted-foreground truncate">{item.meta}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                   
                   <div className="flex items-center justify-between border-t pt-4 mt-2 text-sm">
                     <span className="font-medium text-foreground">14,823 KOL phù hợp đã được đề xuất</span>
                     <span className="text-muted-foreground">Dữ liệu gợi ý tự động</span>
                   </div>
                </div>
              </SlideEffect>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <SlideEffect delay={0.2}>
                 <div className="order-2 lg:order-1 rounded-2xl border shadow-xl bg-card p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-start mb-2">
                     <h4 className="font-semibold text-lg">Quy trình hợp tác KOL</h4>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div> Theo dõi thời gian thực
                     </div>
                   </div>
                   
                   <div className="space-y-3 mt-2">
                     {[
                       { step: 1, title: "Đã gửi lời mời", desc: "Kết nối qua API chính thức", count: "10,243" },
                       { step: 2, title: "Đã phản hồi", desc: "Theo dõi tỷ lệ phản hồi tự động", count: "1,508" },
                       { step: 3, title: "Đã gửi mẫu", desc: "Cập nhật theo tiến độ xử lý", count: "342" },
                       { step: 4, title: "Đã đăng video", desc: "Sẵn sàng theo dõi hiệu suất", count: "98" }
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl border bg-background hover:border-primary/30 transition-colors">
                         <div className="flex items-center gap-4">
                           <div className="w-8 h-8 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center text-primary font-medium shrink-0">
                             {item.step}
                           </div>
                           <div>
                             <p className="font-medium text-sm">{item.title}</p>
                             <p className="text-xs text-muted-foreground">{item.desc}</p>
                           </div>
                         </div>
                         <div className="font-semibold text-foreground/90">{item.count}</div>
                       </div>
                     ))}
                   </div>
                 </div>
              </SlideEffect>
              
              <SlideEffect>
                <div className="order-1 lg:order-2 space-y-6">
                  <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1 font-medium tracking-wide">TÍNH NĂNG NỔI BẬT #2</Badge>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                    Quản lý quy trình hợp tác tập trung
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Theo dõi trạng thái từ mời hợp tác, phản hồi, gửi mẫu đến đăng video trong một giao diện duy nhất.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Quan sát được từng bước hợp tác với từng KOL</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Ghi lại lịch sử trao đổi và trạng thái xử lý</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Giảm phụ thuộc vào bảng tính thủ công</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Dễ truy vết và báo cáo theo chiến dịch</span>
                    </li>
                  </ul>
                </div>
              </SlideEffect>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <SlideEffect>
                <div className="space-y-6">
                  <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1 font-medium tracking-wide">TÍNH NĂNG NỔI BẬT #3</Badge>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                    Đồng bộ tiến độ nhóm theo thời gian thực
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Quản lý mục tiêu, tiến độ và hiệu suất của từng thành viên trong cùng một hệ thống rõ ràng và minh bạch hơn.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Thiết lập KPI theo từng thành viên hoặc chiến dịch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Cập nhật tiến độ hàng ngày không cần tổng hợp tay</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Phân công trách nhiệm rõ ràng hơn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5"><Check className="h-4 w-4 text-primary" /></div>
                      <span className="text-base text-foreground/90">Đo lường hiệu suất đội ngũ trong cùng dashboard</span>
                    </li>
                  </ul>
                </div>
              </SlideEffect>
              
              <SlideEffect delay={0.2}>
                <div className="rounded-2xl border shadow-xl bg-card p-6 flex flex-col gap-6">
                   <div className="flex justify-between items-start mb-2">
                     <h4 className="font-semibold text-lg">Tiến độ nhóm hôm nay</h4>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div> Live dashboard
                     </div>
                   </div>
                   
                   <div className="space-y-5">
                     {[
                       { name: "Nguyễn Lan (BD Lead)", current: 312, target: 300, pct: 100 },
                       { name: "Trần Minh", current: 245, target: 300, pct: 82 },
                       { name: "Lê Hương", current: 198, target: 300, pct: 66 }
                     ].map((item, idx) => (
                       <div key={idx} className="space-y-2 border-b pb-4 last:border-0 last:pb-0">
                         <div className="flex justify-between items-center text-sm">
                           <span className="font-medium">{item.name}</span>
                           <span className="font-semibold text-primary">{item.current} <span className="text-muted-foreground font-normal">/ {item.target}</span></span>
                         </div>
                         <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                           <div 
                             className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
                             style={{ width: `${item.pct}%` }}
                           />
                         </div>
                       </div>
                     ))}
                   </div>
                   
                   <div className="grid grid-cols-3 gap-3 mt-4">
                     <div className="flex flex-col items-center justify-center p-3 rounded-xl border bg-muted/20">
                       <span className="text-xl font-bold">847</span>
                       <span className="text-[10px] text-muted-foreground mt-1 text-center leading-tight">Tổng kết nối hôm nay</span>
                     </div>
                     <div className="flex flex-col items-center justify-center p-3 rounded-xl border bg-muted/20">
                       <span className="text-xl font-bold">124</span>
                       <span className="text-[10px] text-muted-foreground mt-1 text-center leading-tight">Phản hồi nhận được</span>
                     </div>
                     <div className="flex flex-col items-center justify-center p-3 rounded-xl border bg-muted/20">
                       <span className="text-xl font-bold">38</span>
                       <span className="text-[10px] text-muted-foreground mt-1 text-center leading-tight">Deal thành công</span>
                     </div>
                   </div>
                </div>
              </SlideEffect>
            </div>
            
          </div>
        </section>

        {/* "Dữ liệu trực quan" Section */}
        <section className="py-20 md:py-28 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <SlideEffect>
                  <div className="relative rounded-2xl border shadow-xl bg-card p-6 flex flex-col gap-6">
                    {/* Bảng giả lập */}
                    <div className="flex items-center justify-between border-b pb-4">
                      <h4 className="font-semibold text-lg">Bảng theo dõi tiến độ KOL</h4>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">248 KOL Hợp tác</Badge>
                        <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">1.420 Video</Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { title: "@quynhnhu_review", meta: "1.2M Follower • Ngành: Beauty", status: "Đã lên video", color: "bg-green-500/10 text-green-600" },
                        { title: "@tech_studio_vn", meta: "850K Follower • Ngành: Tech", status: "Đang gửi mẫu", color: "bg-blue-500/10 text-blue-600" },
                        { title: "@phuong_an_uong", meta: "2.1M Follower • Ngành: F&B", status: "Chờ chốt deal", color: "bg-amber-500/10 text-amber-600" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-muted/30">
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.meta}</p>
                          </div>
                          <Badge className={item.color} variant="secondary">{item.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </SlideEffect>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <SlideEffect>
                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">Dữ liệu trực quan</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mt-4">
                    Bảng dữ liệu theo dõi KOL, <span className="text-primary">gửi mẫu & hiệu suất</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                    Theo dõi sát sao từng trạng thái booking, tiến độ gửi nhận hàng mẫu và hiệu suất của các nhà sáng tạo (view, doanh thu) qua các biểu đồ đơn giản, trực quan.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <BarChart className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Bảng theo dõi trạng thái booking</h4>
                        <p className="text-sm text-muted-foreground">Toàn bộ hồ sơ KOL, trạng thái thương lượng, và hợp đồng được đồng bộ tự động.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Package className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Quản lý luồng hàng mẫu</h4>
                        <p className="text-sm text-muted-foreground">Quản lý chặt chẽ quá trình gửi hàng mẫu cho KOL, theo dõi mã vận đơn tránh thất thoát.</p>
                      </div>
                    </div>
                  </div>
                </SlideEffect>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section (Liên Hoa Group) */}
        <section id="pricing" className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SlideEffect>
                <Badge variant="secondary" className="px-3 py-1 text-sm font-medium mb-4">Bảng giá</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  Chọn gói phù hợp với doanh nghiệp bạn
                </h2>
                <p className="text-lg text-muted-foreground">
                  Bắt đầu với gói Cơ bản hoặc nâng lên Doanh nghiệp để dùng trọn bộ giải pháp. Thanh toán năm tiết kiệm hơn (~20%).
                </p>
              </SlideEffect>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <SlideEffect delay={0.1}>
                <Card className="h-full flex flex-col border-border/50 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold mb-2">Cơ bản</CardTitle>
                    <p className="text-sm text-muted-foreground min-h-[40px]">Phù hợp cho cửa hàng và đội nhóm nhỏ mới bắt đầu</p>
                    <div className="mt-4">
                      <span className="text-4xl font-extrabold">990.000₫</span>
                      <span className="text-muted-foreground">/tháng</span>
                    </div>
                    <Button className="w-full mt-6" variant="outline">Đăng ký tư vấn</Button>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3 mt-4">
                      {[
                        "1 ứng dụng tuỳ chọn",
                        "Tối đa 5 người dùng",
                        "Báo cáo cơ bản",
                        "Sao lưu định kỳ",
                        "Hỗ trợ trong giờ hành chính"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </SlideEffect>

              {/* Enterprise Plan */}
              <SlideEffect delay={0.2}>
                <Card className="h-full flex flex-col border-primary shadow-xl relative scale-100 md:scale-105 z-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Phổ biến nhất
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold mb-2">Doanh nghiệp</CardTitle>
                    <p className="text-sm text-muted-foreground min-h-[40px]">Cho doanh nghiệp cần trọn bộ giải pháp vận hành</p>
                    <div className="mt-4">
                      <span className="text-4xl font-extrabold">2.990.000₫</span>
                      <span className="text-muted-foreground">/tháng</span>
                    </div>
                    <Button className="w-full mt-6">Đăng ký tư vấn</Button>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-sm font-semibold mb-4 text-foreground">Toàn bộ gói Cơ bản, cộng thêm:</div>
                    <ul className="space-y-3">
                      {[
                        "Trọn bộ ứng dụng (Kho, KOL, Video, AI)",
                        "Số người dùng linh hoạt",
                        "Phân quyền theo vai trò",
                        "Báo cáo & bảng điều khiển nâng cao",
                        "Chữ ký số & duyệt chứng từ",
                        "Hỗ trợ ưu tiên"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </SlideEffect>

              {/* Custom Plan */}
              <SlideEffect delay={0.3}>
                <Card className="h-full flex flex-col border-border/50 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold mb-2">Tùy chỉnh</CardTitle>
                    <p className="text-sm text-muted-foreground min-h-[40px]">Giải pháp riêng theo quy mô và quy trình đặc thù</p>
                    <div className="mt-4">
                      <span className="text-4xl font-extrabold">Liên hệ</span>
                      <span className="text-muted-foreground block mt-1">Báo giá theo yêu cầu</span>
                    </div>
                    <Button className="w-full mt-6" variant="outline">Liên hệ tư vấn</Button>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-sm font-semibold mb-4 text-foreground">Toàn bộ gói Doanh nghiệp, cộng thêm:</div>
                    <ul className="space-y-3">
                      {[
                        "Tuỳ biến tính năng theo yêu cầu",
                        "Triển khai & đào tạo tận nơi",
                        "Tích hợp hệ thống sẵn có",
                        "Quản lý tài khoản riêng",
                        "Cam kết SLA"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </SlideEffect>
            </div>
          </div>
        </section>

        {/* Contact Section (Dohana style) */}
        <section id="contact" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SlideEffect>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  Kết nối với chúng tôi
                </h2>
                <p className="text-lg text-muted-foreground">
                  Chúng tôi hiểu rằng bạn là người quản lý tài ba - hãy tập trung vào việc phát triển sản phẩm của bạn - chúng tôi sẽ giúp bạn hoàn thiện hệ thống quản lý nhanh và tối ưu nhất.
                </p>
              </SlideEffect>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              <div className="lg:col-span-2 space-y-8">
                <SlideEffect delay={0.1}>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Văn phòng</h4>
                        <p className="mt-2 text-sm text-muted-foreground">34s2 An Bình, Trấn Biên, Thành Phố Đồng Nai</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Hotline / Zalo</h4>
                        <p className="mt-2 text-sm text-muted-foreground">0376 566 517</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Email</h4>
                        <p className="mt-2 text-sm text-muted-foreground">contact@lienhoagroup.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Thời gian hoạt động</h4>
                        <p className="mt-2 text-sm text-muted-foreground">Thứ 2 - Thứ 6<br/>9AM - 5:30PM</p>
                      </div>
                    </div>
                  </div>
                </SlideEffect>
              </div>

              <div className="lg:col-span-3">
                <SlideEffect delay={0.2}>
                  <Card className="border-border shadow-xl bg-card">
                    <CardHeader>
                      <CardTitle className="text-2xl">Đăng ký ngay</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Họ và tên</label>
                            <input type="text" className="w-full p-3 rounded-md border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Nhập họ và tên" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Số điện thoại</label>
                            <input type="tel" className="w-full p-3 rounded-md border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Nhập số điện thoại" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Loại giá gói bạn quan tâm</label>
                          <select className="w-full p-3 rounded-md border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                            <option>Gói Cơ bản</option>
                            <option>Gói Doanh nghiệp</option>
                            <option>Gói Tùy chỉnh</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Nội dung</label>
                          <textarea className="w-full p-3 rounded-md border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all min-h-[120px]" placeholder="Nhập yêu cầu của bạn"></textarea>
                        </div>
                        <Button type="button" className="w-full h-12 text-base font-semibold">Gửi yêu cầu đến chúng tôi</Button>
                      </form>
                    </CardContent>
                  </Card>
                </SlideEffect>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Layers className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Liên Hoa Group</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Nền tảng phần mềm vận hành cho doanh nghiệp Việt.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Sản phẩm</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tính năng</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bảng giá</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Giải pháp</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Công ty</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Về chúng tôi</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Liên hệ</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Đăng nhập</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Pháp lý</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Chính sách bảo mật</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Điều khoản dịch vụ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 Liên Hoa Group. Bản quyền thuộc về Công ty Cổ Phần Công Nghệ ByteOne.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Youtube</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
