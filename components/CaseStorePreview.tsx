'use client';

import Image from 'next/image';
import { ArrowUpRight, ImageSquare, MonitorPlay } from '@phosphor-icons/react';

type Props = {
  title: string;
  url: string;
  previewImage: string;
  previewNote?: string;
};

export default function CaseStorePreview({ title, url, previewImage, previewNote }: Props) {
  const host = new URL(url).hostname.replace('www.', '');

  return <section className="case-preview" id="preview" aria-label={`${title} store preview`}>
    <div className="case-preview-bar">
      <div className="case-window-dots" aria-hidden="true"><i /><i /><i /></div>
      <span className="case-preview-url">{host}</span>
      <div className="case-preview-tabs" aria-label="Preview actions">
        <span className="active"><ImageSquare size={15} /> Visual preview</span>
        <a href={url} target="_blank" rel="noreferrer"><MonitorPlay size={15} /> Open live site</a>
      </div>
      <a href={url} target="_blank" rel="noreferrer">Open full site <ArrowUpRight size={16} /></a>
    </div>

    <div className="case-preview-viewport visual">
      <Image src={previewImage} alt={`${title} storefront preview`} fill priority sizes="100vw" />
      <a className="case-live-launch" href={url} target="_blank" rel="noreferrer"><MonitorPlay size={21} /> Open live storefront</a>
    </div>
    <div className="case-preview-foot"><p>Reliable recruiter preview. Open the live storefront in a new tab for the complete interactive experience.</p>{previewNote && <strong>{previewNote}</strong>}</div>
  </section>;
}
