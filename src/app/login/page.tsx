'use client';

import React, { useState } from 'react';
import schoolsData from '@/data/schools.json';
import { SchoolUnit } from '@/types';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const schools: SchoolUnit[] = schoolsData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi loading sebelum pindah ke dashboard
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-primary">ERPAS LMS</h1>
            <p className="text-base-content/60 mt-2">Masuk ke akun belajar Anda</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Selector Unit Sekolah */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Unit Sekolah</span>
              </label>
              <select className="select select-bordered w-full" required defaultValue="">
                <option value="" disabled>Pilih Unit Sekolah...</option>
                {schools.map((school) => (
                  <option key={school.id} value={school.id}>
                    {school.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Input Email/NIK */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Email atau NIK</span>
              </label>
              <input 
                type="text" 
                placeholder="Contoh: budi.siswa@yayasan.sch.id" 
                className="input input-bordered w-full" 
                required 
              />
            </div>

            {/* Input Password */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Kata Sandi</span>
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Masukkan kata sandi" 
                  className="input input-bordered w-full pr-12" 
                  required 
                />
                <button 
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-primary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <span className="text-xs font-bold">HIDE</span>
                  ) : (
                    <span className="text-xs font-bold">SHOW</span>
                  )}
                </button>
              </div>
              <label className="label">
                <span className="label-text-alt link link-hover text-primary">Lupa kata sandi?</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button 
                type="submit" 
                className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Memproses...' : 'Masuk'}
              </button>
            </div>
          </form>

          <div className="divider text-xs text-base-content/40 uppercase">Atau</div>
          
          <div className="text-center">
            <Link href="/" className="btn btn-ghost btn-sm">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
