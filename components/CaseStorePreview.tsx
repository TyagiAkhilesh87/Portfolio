'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, ImageSquare, MonitorPlay } from '@phosphor-icons/react';

type Props = {
  title: string;
  url: string;
  previewImage: string;
  previewNote?: string;
};

export default function CaseStorePreview({ title, url, previewImage, previewNote }: Props) {
  const [mode, setMode] = useState<'visual' | 'interactive'>('visual');
  const host = new URL(url).hostname.replace('www.', '');

  return <section className="case-preview" id="preview" aria-label={`${title} store preview`}>
    <div className="case-preview-bar">
      <div className="case-window-dots" aria-hidden="true"><i /><i /><i /></div>
      <span className="case-preview-url">{host}</span>
      <div className="case-preview-tabs" role="tablist" aria-label="Preview mode">
        <button className={mode === 'visual' ? 'active' : ''} onClick={() => setMode('visual')} role="tab" aria-selected={mode === 'visual'}><ImageSquare size={15} /> Visual preview</button>
        <button className={mode === 'interactive' ? 'active' : ''} onClick={() => setMode('interactive')} role="tab" aria-selected={mode === 'interactive'}><MonitorPlay size={15} /> Interactive site</button>
      </div>
      <a href={url} target="_blank" rel="noreferrer">Open full site <ArrowUpRight size={16} /></a>
    </div>

    <div className={`case-preview-viewport ${mode}`}>
      {mode === 'visual' ? <Image src={previewImage} alt={`${title} storefront preview`} fill priority sizes="100vw" /> : <>
        <iframe src={url} title={`${title} interactive storefront`} loading="eager" referrerPolicy="no-referrer" />
        <div className="case-embed-help"><span>Live site preview</span><p>Some Shopify stores block embedded browsing. If this panel stays blank, use “Open full site”.</p></div>
      </>}
    </div>
    <div className="case-preview-foot"><p>Recruiter preview · switch between the current visual capture and the live storefront.</p>{previewNote && <strong>{previewNote}</strong>}</div>
  </section>;
}
