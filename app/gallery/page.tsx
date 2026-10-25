import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import gallery from '../data/gallery.json';
import { trips } from '../data/gsoc';

export const metadata: Metadata = {
    title: 'Gallery',
    description:
        'Photos from FOSSASIA Summit Bangkok, Wikimania Paris and the FOSSASIA community in Germany.',
    alternates: { canonical: 'https://angarkar.is-a.dev/gallery/' },
};

export default function GalleryPage() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
                The people and places around the work: conferences, demos and
                the FOSSASIA community.
            </p>
            <div className="mt-14 space-y-16">
                {trips.map((trip) => (
                    <section key={trip.place} id={trip.place} className="scroll-mt-20">
                        <p className="font-mono text-xs text-muted-foreground">
                            {trip.where} · {trip.date}
                        </p>
                        <h2 className="mt-1 text-xl font-semibold tracking-tight">
                            {trip.title}
                        </h2>
                        <p className="mt-2 max-w-2xl text-muted-foreground">
                            {trip.detail}
                        </p>
                        <Gallery
                            photos={gallery.filter((g) => g.place === trip.place)}
                        />
                    </section>
                ))}
            </div>
        </div>
    );
}
