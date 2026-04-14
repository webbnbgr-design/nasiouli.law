/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  Home, 
  Users, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Gavel,
  Building2,
  FileText
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Το Γραφείο', href: '#about' },
    { name: 'Τομείς Δικαίου', href: '#services' },
    { name: 'Ακίνητα', href: '#real-estate' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-ivory/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="group">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif tracking-tight text-slate-blue group-hover:text-soft-gold transition-colors">
              Χριστίνα Κ. Νασιούλη
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-ink/60 -mt-1">
              & Συνεργάτες
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-ink/80 hover:text-soft-gold transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-ivory border-t border-ink/5 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-slate-blue hover:text-soft-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-ivory">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] rounded-full border border-soft-gold/30" />
        <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] rounded-full border border-slate-blue/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-soft-gold font-medium tracking-[0.2em] uppercase text-xs mb-6">
              Δικηγορικό Γραφείο • Κολωνάκι
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-slate-blue mb-8">
              Νομική Ασφάλεια με <br />
              <span className="italic font-light text-ink">Ανθρώπινη Προσέγγιση</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed mb-10 max-w-xl">
              Στο γραφείο μας, κάθε υπόθεση είναι μια προσωπική δέσμευση. Συνδυάζουμε την υψηλή νομική κατάρτιση με την κατανόηση των αναγκών σας.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-blue text-white rounded-full hover:bg-ink transition-all duration-300 group"
              >
                <span>Τομείς Εξειδίκευσης</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-blue/20 text-slate-blue rounded-full hover:border-slate-blue transition-all duration-300"
              >
                Επικοινωνία
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-blue/40"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-blue/40 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Meeting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-ivory rounded-2xl p-8 shadow-xl hidden lg:block">
              <div className="flex flex-col h-full justify-center text-center">
                <span className="text-4xl font-serif text-soft-gold mb-2">20+</span>
                <span className="text-xs uppercase tracking-widest text-ink/60">Χρόνια Εμπειρίας</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-soft-gold font-medium tracking-widest uppercase text-xs mb-4 block">Το Γραφείο</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-blue mb-8">
              Ο πελάτης ως άνθρωπος, <br />
              όχι ως απλή υπόθεση.
            </h2>
            <div className="space-y-6 text-ink/70 leading-relaxed text-lg font-light">
              <p>
                Το δικηγορικό γραφείο της Χριστίνας Κ. Νασιούλη εδρεύει στην καρδιά της Αθήνας, στο Κολωνάκι. Η φιλοσοφία μας βασίζεται στην οικοδόμηση σχέσεων εμπιστοσύνης και στην παροχή εξατομικευμένων νομικών λύσεων.
              </p>
              <p>
                Αντιμετωπίζουμε κάθε πρόκληση με συνέπεια, αποτελεσματικότητα και, πάνω απ' όλα, με σεβασμό στην προσωπικότητα και τις ανάγκες του εντολέα μας. Ειδικευόμαστε σε υποθέσεις που απαιτούν λεπτούς χειρισμούς και στρατηγική σκέψη.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center text-soft-gold shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-slate-blue">Συνέπεια</h4>
                  <p className="text-sm text-ink/60">Απόλυτη προσήλωση στους στόχους σας.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center text-soft-gold shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-slate-blue">Εμπιστοσύνη</h4>
                  <p className="text-sm text-ink/60">Προσωπική σχέση με κάθε πελάτη.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Αστικό Δίκαιο',
      description: 'Ολοκληρωμένη νομική υποστήριξη σε όλο το φάσμα του Αστικού Δικαίου, από συμβάσεις έως αποζημιώσεις.',
      icon: <Scale className="w-6 h-6" />,
    },
    {
      title: 'Οικογενειακό Δίκαιο',
      description: 'Ευαίσθητοι χειρισμοί σε θέματα διαζυγίων, επιμέλειας τέκνων και διατροφών με ανθρωποκεντρική ματιά.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Μισθώσεις',
      description: 'Προστασία ιδιοκτητών και ενοικιαστών, σύνταξη μισθωτηρίων και επίλυση μισθωτικών διαφορών.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: 'Ασφαλιστικά Μέτρα',
      description: 'Άμεση δικαστική προστασία για την εξασφάλιση των δικαιωμάτων σας σε επείγουσες περιπτώσεις.',
      icon: <Gavel className="w-6 h-6" />,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-soft-gold font-medium tracking-widest uppercase text-xs mb-4 block">Τομείς Εξειδίκευσης</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-blue mb-6">Υπηρεσίες Υψηλού Επιπέδου</h2>
          <p className="text-ink/60 font-light">
            Παρέχουμε εξειδικευμένες νομικές συμβουλές και δικαστική εκπροσώπηση, εστιάζοντας στην ουσία κάθε υπόθεσης.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl airy-shadow hover:translate-y-[-8px] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-ivory flex items-center justify-center text-slate-blue mb-8 group-hover:bg-soft-gold group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-slate-blue mb-4">{service.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RealEstate = () => {
  return (
    <section id="real-estate" className="py-24 md:py-32 bg-slate-blue text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full border border-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-soft-gold font-medium tracking-widest uppercase text-xs mb-4 block">Real Estate Services</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Αγοραπωλησίες & <br />
              Διαχείριση Ακινήτων
            </h2>
            <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
              Η αγορά ή πώληση ενός ακινήτου είναι μια από τις σημαντικότερες αποφάσεις. Διασφαλίζουμε τη νομική εγκυρότητα κάθε συναλλαγής, πραγματοποιώντας ενδελεχείς ελέγχους τίτλων και παρέχοντας πλήρη καθοδήγηση μέχρι την υπογραφή των συμβολαίων.
            </p>
            
            <ul className="space-y-4 mb-12">
              {[
                'Έλεγχος Τίτλων Ιδιοκτησίας',
                'Παράσταση σε Συμβόλαια',
                'Νομική Συμβουλευτική Επενδύσεων',
                'Διαχείριση Ακίνητης Περιουσίας'
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-soft-gold flex items-center justify-center">
                    <ChevronRight size={12} className="text-slate-blue" />
                  </div>
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-soft-gold text-slate-blue rounded-full hover:bg-white transition-all duration-300 font-medium"
            >
              Ζητήστε Συμβουλευτική
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=600" alt="Classic Architecture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-soft-gold flex items-center justify-center p-8 text-center">
                  <Building2 size={48} className="text-slate-blue opacity-40 mb-4" />
                  <p className="text-slate-blue font-serif text-xl">Ασφάλεια σε κάθε βήμα</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6199f74109?auto=format&fit=crop&q=80&w=600" alt="Luxury Residence" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600" alt="Elegant Interior" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-ivory rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-10 left-10 text-soft-gold/20">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H5.01697C3.9124 8 3.01697 7.10457 3.01697 6V3L10.017 3V15C10.017 18.3137 7.33068 21 4.01697 21H3.01697Z" />
            </svg>
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-slate-blue mb-8 leading-relaxed">
                "Η Χριστίνα δεν σε βλέπει απλώς σαν μια υπόθεση, <span className="text-soft-gold italic">σε βλέπει σαν άνθρωπο</span>. Η ηρεμία και η σιγουριά που αποπνέει είναι ανεκτίμητη."
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-16 h-[1px] bg-soft-gold mb-4" />
                <span className="font-medium text-ink uppercase tracking-widest text-sm">Εντολέας Γραφείου</span>
                <span className="text-ink/40 text-xs mt-1">Αθήνα, Κολωνάκι</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-soft-gold font-medium tracking-widest uppercase text-xs mb-4 block">Επικοινωνία</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-blue mb-8">Είμαστε εδώ για εσάς</h2>
            <p className="text-ink/60 text-lg font-light mb-16">
              Επικοινωνήστε μαζί μας για να προγραμματίσουμε μια πρώτη συμβουλευτική συνάντηση στο γραφείο μας στο Κολωνάκι.
            </p>

            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-soft-gold shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-slate-blue mb-2">Διεύθυνση</h4>
                  <p className="text-ink/60 font-light text-sm">Βησσαρίωνος 4 & Μαρασλή,<br />Κολωνάκι, Αθήνα</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-soft-gold shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-slate-blue mb-2">Τηλέφωνο</h4>
                  <p className="text-ink/60 font-light text-sm">210 323 6005</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-serif tracking-tight text-white">
                Χριστίνα Κ. Νασιούλη
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 -mt-1">
                & Συνεργάτες
              </span>
            </div>
            <p className="text-white/50 font-light max-w-sm leading-relaxed">
              Δικηγορικό γραφείο με έδρα το Κολωνάκι. Παρέχουμε εξειδικευμένες νομικές υπηρεσίες με επίκεντρο τον άνθρωπο και την αποτελεσματικότητα.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Πλοήγηση</h4>
            <ul className="space-y-4 text-white/50 font-light text-sm">
              <li><a href="#home" className="hover:text-soft-gold transition-colors">Αρχική</a></li>
              <li><a href="#about" className="hover:text-soft-gold transition-colors">Το Γραφείο</a></li>
              <li><a href="#services" className="hover:text-soft-gold transition-colors">Τομείς Δικαίου</a></li>
              <li><a href="#real-estate" className="hover:text-soft-gold transition-colors">Ακίνητα</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Ωράριο</h4>
            <ul className="space-y-4 text-white/50 font-light text-sm">
              <li>Δευτέρα - Παρασκευή</li>
              <li>09:00 — 20:00</li>
              <li className="pt-4 text-white/30 italic">Συναντήσεις κατόπιν ραντεβού</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Χριστίνα Κ. Νασιούλη & Συνεργάτες. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Πολιτική Απορρήτου</a>
            <a href="#" className="hover:text-white transition-colors">Όροι Χρήσης</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-soft-gold/30 selection:text-slate-blue">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <RealEstate />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
