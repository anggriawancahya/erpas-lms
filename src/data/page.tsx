'use client';

import React, { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-primary">ERPAS LMS</h1>
            <p className="text-sm opacity-70">Silakan masuk ke akun Anda</p>
          </div>

          <form className="space-y-4">
            {/* Unit Sekolah Selector */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Unit Sekolah</span>
              </label>
              <select className="select select-bordered w-full">
                <option disabled selected>Pilih Sekolah</option>
                <option>SMA 1 Yayasan</option>
                <option>SMP 2 Yayasan</option>
                <option>SD 3 Yayasan</option>
              </select>
            </div>

            {/* Email/ID Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email atau Nomor Induk</span>
              </label>
              <input type="text" placeholder="username@sekolah.com" className="input input-bordered" required />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Kata Sandi</span>
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="input input-bordered w-full" 
                  required 
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Sembunyikan" : "Lihat"}
                </button>
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Masuk</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}