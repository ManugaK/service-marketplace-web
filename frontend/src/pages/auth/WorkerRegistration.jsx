import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck2,
  Camera,
  Check,
  ChevronDown,
  ChevronRight,
  CircleEllipsis,
  FileBadge,
  FileText,
  ImagePlus,
  Info,
  Lightbulb,
  LockKeyhole,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  ShieldOff,
  Smartphone,
  UploadCloud,
  X,
} from 'lucide-react';
import CustomerFooter from '../../components/layout/CustomerFooter';

const GREEN = '#007A55';

const districts = ['Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Galle', 'Matara'];
const categories = [
  'Home Painting & Renovation',
  'Electrical Services',
  'Plumbing Services',
  'Carpentry',
  'AC Repair & Maintenance',
  'Home Cleaning',
];

function WorkerRegistrationHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-[1760px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <button
          type="button"
          className="text-2xl font-extrabold tracking-tight text-emerald-700"
          onClick={() => window.history.replaceState(null, '', '/')}
        >
          SkilledLK
        </button>

        <img
          src="https://i.pravatar.cc/120?img=12"
          alt="Worker profile"
          className="h-10 w-10 rounded-full border-4 border-emerald-700 object-cover shadow-sm"
        />
      </div>
    </header>
  );
}

function ProgressHeader({ step, title, percent }) {
  return (
    <section className="mb-10">
      <div className="mb-2 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
            Step {step} of 4
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {title}
          </h1>
        </div>
        <p className="hidden text-sm font-medium text-slate-600 sm:block">{percent}% complete</p>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-blue-100">
        <div
          className="h-full rounded-full bg-emerald-700 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-2 text-right text-sm font-medium text-slate-600 sm:hidden">{percent}% complete</p>
    </section>
  );
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl border border-emerald-900/20 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function Label({ children }) {
  return <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-600">{children}</label>;
}

function TextInput(props) {
  return (
    <input
      {...props}
      className={`h-12 w-full rounded-lg border border-emerald-900/20 bg-white px-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100 ${props.className || ''}`}
    />
  );
}

function SelectInput({ children, ...props }) {
  return (
    <div className="relative">
      <select
        {...props}
        className="h-12 w-full appearance-none rounded-lg border border-emerald-900/20 bg-white px-4 pr-10 text-base text-slate-800 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
      >
        {children}
      </select>
      <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" />
    </div>
  );
}

function ActionBar({ onBack, onNext, nextLabel = 'Next', submit = false, disabled = false }) {
  return (
    <div className="mt-10 border-t border-emerald-900/20 pt-8">
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="h-12 rounded-lg border border-emerald-700 px-9 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
        >
          Back
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={onNext}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-10 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {nextLabel}
          {!submit && <ChevronRight size={17} />}
          {submit && <ChevronRight size={17} />}
        </button>
      </div>
    </div>
  );
}

function Chip({ children, onRemove }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
      {children}
      {onRemove && (
        <button type="button" onClick={onRemove} className="text-emerald-700 hover:text-red-600">
          <X size={14} />
        </button>
      )}
    </span>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 rounded-full transition ${checked ? 'bg-emerald-700' : 'bg-slate-300'}`}
      aria-pressed={checked}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${checked ? 'left-6' : 'left-1'}`}
      />
    </button>
  );
}

function StepTwo({ onBack, onNext }) {
  const [skills, setSkills] = useState(['Interior Painting', 'Exterior', 'Waterproofing']);
  const [gpsEnabled, setGpsEnabled] = useState(true);

  const addSkill = () => {
    const nextSkill = window.prompt('Enter skill or specialization');
    if (nextSkill?.trim()) {
      setSkills((prev) => [...prev, nextSkill.trim()]);
    }
  };

  return (
    <>
      <ProgressHeader step={2} title="Personal Details" percent={25} />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_390px] 2xl:grid-cols-[minmax(0,1fr)_430px] 2xl:gap-8">
        <Card className="p-6 sm:p-7 2xl:p-9">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Tell us about yourself</h2>
            <p className="mt-1 text-slate-600">This information will appear on your public profile.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Label>Full Name</Label>
              <TextInput defaultValue="Kasun Silva" />
            </div>

            <div>
              <Label>Phone Number</Label>
              <div className="flex">
                <span className="inline-flex h-12 items-center rounded-l-lg border border-r-0 border-emerald-900/20 bg-blue-50 px-4 text-slate-600">
                  +94
                </span>
                <TextInput className="rounded-l-none" defaultValue="771234567" />
              </div>
            </div>

            <div className="md:col-span-2">
              <Label>Email Address (Optional)</Label>
              <TextInput type="email" defaultValue="kasun.silva@example.com" />
            </div>

            <div>
              <Label>Service Category</Label>
              <SelectInput defaultValue="Home Painting & Renovation">
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </SelectInput>
            </div>

            <div>
              <Label>Years of Experience</Label>
              <TextInput type="number" min="0" defaultValue="5" />
            </div>

            <div className="md:col-span-2">
              <Label>Bio / About</Label>
              <textarea
                rows={5}
                placeholder="Describe your expertise and what makes your service unique..."
                className="w-full resize-none rounded-lg border border-emerald-900/20 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
              />
            </div>

            <div className="md:col-span-2">
              <Label>Skills / Specializations</Label>
              <div className="flex min-h-12 flex-wrap items-center gap-2 rounded-lg border border-emerald-900/20 px-3 py-2">
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    onRemove={() => setSkills((prev) => prev.filter((item) => item !== skill))}
                  >
                    {skill}
                  </Chip>
                ))}
                <button
                  type="button"
                  onClick={addSkill}
                  className="inline-flex items-center gap-1 rounded-full border border-dashed border-emerald-700 px-3 py-1 text-sm font-bold text-emerald-700 hover:bg-emerald-50"
                >
                  <Plus size={14} /> Add Skill
                </button>
              </div>
            </div>
          </div>
        </Card>

        <aside className="space-y-6 2xl:space-y-8">
          <Card className="p-6 text-center 2xl:p-8">
            <h3 className="text-left text-xs font-bold uppercase tracking-wide text-slate-600">Profile Photo</h3>
            <button
              type="button"
              className="mx-auto mt-5 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-dashed border-emerald-900/25 bg-blue-50 text-emerald-700 transition hover:border-emerald-700"
            >
              <Camera size={32} className="mb-2 text-slate-500" />
              <span className="text-sm font-semibold">Upload photo</span>
            </button>
            <p className="mx-auto mt-6 max-w-xs text-xs leading-relaxed text-slate-500">
              Please upload a clear, professional photo of yourself. Profile photos help build trust with customers.
            </p>
          </Card>

          <Card className="p-6 2xl:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-xs font-bold uppercase tracking-wide text-slate-600">Service Location</h3>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                Use my GPS
                <Toggle checked={gpsEnabled} onChange={setGpsEnabled} />
              </div>
            </div>

            <Label>District</Label>
            <SelectInput defaultValue="Colombo">
              {districts.map((district) => (
                <option key={district}>{district}</option>
              ))}
            </SelectInput>

            <div className="mt-6">
              <Label>Service Zones</Label>
              <div className="flex flex-wrap gap-2">
                {['Colombo 01-15', 'Dehiwala', 'Nugegoda'].map((zone) => (
                  <span key={zone} className="rounded-md border border-slate-300 bg-blue-50 px-3 py-1 text-xs font-medium text-slate-700">
                    {zone}
                  </span>
                ))}
              </div>
              <button type="button" className="mt-3 text-sm font-bold text-emerald-700 hover:underline">
                + Add Zone
              </button>
            </div>

            <div className="relative mt-6 h-32 overflow-hidden rounded-lg bg-slate-200">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_0,_#ffffff_32%,_#d8d8d8_33%,_#c9c9c9_100%)]" />
              <MapPin size={34} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-emerald-700 text-emerald-700" />
              <MapPin size={26} className="absolute left-[44%] top-[62%] -translate-x-1/2 -translate-y-1/2 fill-slate-400 text-slate-400" />
            </div>
          </Card>
        </aside>
      </div>

      <ActionBar onBack={onBack} onNext={onNext} nextLabel="Next: Documents" />
    </>
  );
}

function UploadedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase text-emerald-700">
      <Check size={14} /> Uploaded
    </span>
  );
}

function DocumentImage({ label, variant = 'front' }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-lg bg-slate-200 sm:h-56">
      <div
        className={`absolute inset-0 ${
          variant === 'front'
            ? 'bg-[linear-gradient(140deg,#334155,#cbd5e1_45%,#f8fafc)]'
            : 'bg-[linear-gradient(140deg,#b7d5dc,#e2e8f0_55%,#91b3bd)]'
        }`}
      />
      <div className="absolute inset-x-10 bottom-10 h-20 rounded-xl bg-white/80 shadow-xl backdrop-blur-sm">
        <div className="ml-6 mt-5 h-8 w-10 rounded bg-amber-200" />
        <div className="ml-24 mt-[-34px] space-y-2">
          <div className="h-2 w-32 rounded bg-slate-400" />
          <div className="h-2 w-44 rounded bg-slate-300" />
          <div className="mt-4 h-5 w-40 rounded bg-slate-700" />
        </div>
      </div>
      <span className="absolute bottom-3 left-3 rounded bg-slate-800/70 px-2 py-1 text-[10px] font-bold uppercase text-white">
        {label}
      </span>
    </div>
  );
}

function TrustScore() {
  const items = [
    { label: 'NIC Verified', score: '+20', icon: BadgeCheck },
    { label: 'Phone Verified', score: '+15', icon: Smartphone },
    { label: 'Portfolio Added', score: '+15', icon: ImagePlus },
  ];

  return (
    <Card className="p-7">
      <h3 className="mb-6 text-center text-2xl font-bold text-slate-950">Trust Score</h3>
      <div className="mx-auto mb-7 grid h-28 w-28 place-items-center rounded-full border-[7px] border-emerald-700">
        <p className="text-3xl font-bold text-slate-950">
          72<span className="text-sm font-medium text-slate-400">/100</span>
        </p>
      </div>
      <div className="space-y-3">
        {items.map(({ label, score, icon: Icon }) => (
          <div key={label} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-3 text-sm">
            <span className="flex items-center gap-2 font-medium text-slate-800">
              <Icon size={17} className="text-emerald-700" /> {label}
            </span>
            <span className="font-bold text-emerald-700">{score}</span>
          </div>
        ))}
      </div>
      <div className="mt-7 rounded-lg border border-emerald-900/10 bg-emerald-50 px-4 py-3 text-center text-sm text-emerald-800">
        <span className="font-bold">Tip:</span> Add certificate to reach 90+
      </div>
    </Card>
  );
}

function SecureHandling() {
  const items = [
    { title: '256-bit SSL encryption', text: 'Your documents are encrypted during transfer and at rest.', icon: LockKeyhole },
    { title: 'Hidden from other users', text: 'Only verified administrators can see your sensitive documents.', icon: ShieldOff },
    { title: 'GDPR Compliant', text: 'We follow international data protection standards strictly.', icon: ShieldCheck },
  ];

  return (
    <Card className="p-6">
      <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-500">Secure Handling</h3>
      <div className="space-y-5">
        {items.map(({ title, text, icon: Icon }) => (
          <div key={title} className="flex gap-4">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-600">
              <Icon size={19} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-950">{title}</h4>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function StepThree({ onBack, onNext }) {
  const portfolio = useMemo(
    () => [
      'bg-[linear-gradient(140deg,#020617,#475569,#020617)]',
      'bg-[linear-gradient(140deg,#4c1d95,#111827,#f97316)]',
      'bg-[linear-gradient(140deg,#e2e8f0,#64748b,#f97316)]',
    ],
    []
  );

  return (
    <>
      <ProgressHeader step={3} title="Upload your documents" percent={50} />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_410px] 2xl:gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-4 text-amber-800">
            <CircleEllipsis size={20} />
            <span className="text-sm font-medium">Verification pending — Admin reviews within 24 hours</span>
          </div>

          <Card className="p-6">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-950">National ID (NIC)</h2>
                <p className="mt-1 text-sm text-slate-500">Official government issued identity card</p>
              </div>
              <UploadedBadge />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <DocumentImage label="Front Side" />
              <DocumentImage label="Back Side" variant="back" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  Work Certificate <span className="text-sm font-normal text-slate-500">(Optional)</span>
                </h2>
                <p className="mt-1 text-sm text-slate-500">Vocational training or professional membership certificates</p>
              </div>
              <button type="button" className="rounded-lg border border-emerald-700 px-5 py-2 text-sm font-bold text-emerald-700 hover:bg-emerald-50">
                Upload
              </button>
            </div>
            <button
              type="button"
              className="flex h-44 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-100 text-slate-500 transition hover:border-emerald-700 hover:bg-emerald-50"
            >
              <UploadCloud size={34} className="mb-2 text-slate-400" />
              <span className="font-medium text-slate-700">Drag and drop files here</span>
              <span className="mt-1 text-xs text-slate-400">PDF, JPG, or PNG up to 10MB</span>
            </button>
          </Card>

          <Card className="p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  Portfolio Photos <span className="text-sm font-normal text-emerald-700">(Recommended)</span>
                </h2>
                <p className="mt-1 text-sm text-slate-500">Showcase your best work to potential clients</p>
              </div>
              <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-800">
                <Plus size={16} /> Add photo
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <button type="button" className="grid h-36 place-items-center rounded-lg bg-slate-100 text-slate-400 hover:bg-emerald-50 hover:text-emerald-700">
                <Camera size={34} />
              </button>
              {portfolio.map((bg, index) => (
                <div key={index} className={`relative h-36 rounded-lg ${bg}`}>
                  <button className="absolute right-1 top-1 grid h-5 w-5 place-items-center rounded-full bg-white/80 text-slate-700">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  Police Clearance <span className="text-sm font-normal text-slate-500">(Optional)</span>
                </h2>
                <p className="mt-1 text-sm text-slate-500">Enhance trust for home-visit tasks</p>
              </div>
              <button type="button" className="rounded-lg border border-emerald-700 px-5 py-2 text-sm font-bold text-emerald-700 hover:bg-emerald-50">
                Upload
              </button>
            </div>
          </Card>
        </div>

        <aside className="space-y-6">
          <TrustScore />
          <SecureHandling />
        </aside>
      </div>

      <ActionBar onBack={onBack} onNext={onNext} nextLabel="Next: Packages" />
    </>
  );
}

function PackageOption({ title, text }) {
  return (
    <button
      type="button"
      className="rounded-xl border-2 border-dashed border-emerald-900/20 bg-white/60 p-6 text-left transition hover:border-emerald-700 hover:bg-emerald-50"
    >
      <h3 className="text-2xl font-bold text-slate-700">{title}</h3>
      <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
      <span className="mt-8 inline-flex items-center gap-2 text-base font-bold text-emerald-700">
        <Plus size={22} /> Add this package
      </span>
    </button>
  );
}

function LeadFeePreference() {
  const [preference, setPreference] = useState('subscription');

  return (
    <Card className="p-7">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950">
        Lead Fee Preference <Info size={17} className="text-slate-500" />
      </h2>
      <span className="inline-flex rounded-full border border-emerald-900/20 bg-emerald-100 px-4 py-1 text-sm font-bold text-emerald-800">
        Pro Subscription
      </span>
      <p className="mt-7 leading-relaxed text-slate-600">
        Choose how you want to handle platform lead fees for customer inquiries.
      </p>
      <div className="mt-6 grid grid-cols-2 rounded-lg bg-blue-100 p-1">
        <button
          type="button"
          onClick={() => setPreference('subscription')}
          className={`rounded-md py-3 text-sm font-bold transition ${preference === 'subscription' ? 'bg-emerald-700 text-white shadow' : 'text-slate-700'}`}
        >
          Subscription
        </button>
        <button
          type="button"
          onClick={() => setPreference('pay-per-lead')}
          className={`rounded-md py-3 text-sm font-bold transition ${preference === 'pay-per-lead' ? 'bg-emerald-700 text-white shadow' : 'text-slate-700'}`}
        >
          Pay-per-lead
        </button>
      </div>
      <div className="mt-6 rounded-lg border border-emerald-900/10 bg-emerald-50 px-4 py-4 text-sm text-emerald-800">
        <span className="font-bold">Note:</span> Your active Pro Subscription covers all lead fees for up to 50 inquiries per month.
      </div>
    </Card>
  );
}

function CheckboxRow({ checked, onChange, children }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-base leading-relaxed text-slate-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-700 accent-emerald-700"
      />
      <span>{children}</span>
    </label>
  );
}

function StepFour({ onBack, onSubmit }) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [docsConfirmed, setDocsConfirmed] = useState(false);

  return (
    <>
      <ProgressHeader step={4} title="Set your service packages" percent={75} />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_400px] 2xl:grid-cols-[minmax(0,1fr)_480px] 2xl:gap-8">
        <div>
          <div className="relative rounded-xl border-2 border-emerald-700 bg-white p-6 pt-8 shadow-sm 2xl:p-8 2xl:pt-10">
            <span className="absolute -top-4 left-8 rounded-full bg-emerald-700 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              Basic / Starting Service
            </span>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label>Package Name</Label>
                <TextInput defaultValue="Room Painting - Small" />
              </div>
              <div>
                <Label>Base Price (LKR)</Label>
                <TextInput defaultValue="15,000" />
              </div>
              <div className="md:col-span-2">
                <Label>Description</Label>
                <textarea
                  rows={4}
                  defaultValue="Standard wall preparation, single color application for a standard 12x12 room. Includes minor crack filling and protective sheeting for floors."
                  className="w-full resize-none rounded-lg border border-emerald-900/20 bg-white px-4 py-4 text-base leading-relaxed text-slate-800 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 2xl:gap-8">
            <PackageOption title="Full House / Large Project" text="Comprehensive service for multiple rooms or exterior work." />
            <PackageOption title="Custom Quote / Hourly" text="For specialized tasks that require on-site assessment." />
          </div>

          <button
            type="button"
            className="mt-6 flex h-44 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-emerald-700 bg-emerald-50/40 text-emerald-700 transition hover:bg-emerald-50"
          >
            <Plus size={38} />
            <span className="mt-2 text-2xl font-bold">Add custom package</span>
          </button>
        </div>

        <aside className="space-y-6 2xl:space-y-8">
          <LeadFeePreference />

          <Card className="p-7">
            <h2 className="mb-7 text-2xl font-bold text-slate-950">Compliance & Terms</h2>
            <div className="space-y-5">
              <CheckboxRow checked={termsAccepted} onChange={setTermsAccepted}>
                I agree to SkilledLK Professional Terms of Service
              </CheckboxRow>
              <CheckboxRow checked={docsConfirmed} onChange={setDocsConfirmed}>
                I confirm all provided documents are authentic
              </CheckboxRow>
            </div>
          </Card>

          <Card className="p-7">
            <div className="flex gap-4">
              <Lightbulb size={24} className="mt-1 shrink-0 text-emerald-700" />
              <div>
                <h3 className="text-lg font-bold text-emerald-700">Pro Tip</h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Workers with at least 3 distinct packages see 45% higher booking rates than those with only one.
                </p>
              </div>
            </div>
          </Card>
        </aside>
      </div>

      <ActionBar
        onBack={onBack}
        onNext={onSubmit}
        nextLabel="Submit"
        submit
        disabled={!termsAccepted || !docsConfirmed}
      />
    </>
  );
}

export default function WorkerRegistration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(2);

  const goBack = () => {
    if (step === 2) {
      navigate('/signup');
      return;
    }
    setStep((current) => current - 1);
  };

  const goNext = () => setStep((current) => Math.min(4, current + 1));
  const submit = () => navigate('/worker/dashboard');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <WorkerRegistrationHeader />
      <main className="mx-auto w-full max-w-[1760px] px-5 py-8 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 2xl:py-12">
        {step === 2 && <StepTwo onBack={goBack} onNext={goNext} />}
        {step === 3 && <StepThree onBack={goBack} onNext={goNext} />}
        {step === 4 && <StepFour onBack={goBack} onSubmit={submit} />}
      </main>
      <CustomerFooter logoHref="/worker/dashboard" />
    </div>
  );
}
