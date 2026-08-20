import { NextResponse } from 'next/server';
import { personalInfo } from '@/data/portfolio';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const subject = String(body.subject || '').trim();
    const message = String(body.message || '').trim();

    if (name.length < 2 || !email || !subject || message.length < 10) {
      return NextResponse.json({ ok: false, error: 'Data tidak lengkap' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Email tidak valid' }, { status: 400 });
    }

    const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: `[Portofolio] ${subject}`,
        message,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: 'Gagal mengirim pesan' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Terjadi kesalahan' }, { status: 500 });
  }
}
