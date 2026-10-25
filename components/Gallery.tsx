'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Photo {
    place: string;
    file: string;
    caption: string;
}

const Gallery = ({ photos }: { photos: Photo[] }) => {
    const [index, setIndex] = useState<number | null>(null);
    const dialog = useRef<HTMLDialogElement>(null);

    const open = (i: number) => {
        setIndex(i);
        dialog.current?.showModal();
    };
    const step = useCallback(
        (delta: number) =>
            setIndex((i) =>
                i === null ? i : (i + delta + photos.length) % photos.length,
            ),
        [photos.length],
    );

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (!dialog.current?.open) return;
            if (e.key === 'ArrowRight') step(1);
            if (e.key === 'ArrowLeft') step(-1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [step]);

    const current = index === null ? null : photos[index];

    return (
        <>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {photos.map((p, i) => (
                    <button
                        key={p.file}
                        type="button"
                        onClick={() => open(i)}
                        className="group overflow-hidden rounded-md text-left"
                    >
                        <Image
                            src={`/gallery/thumbs/${p.place}/${p.file}`}
                            alt={p.caption}
                            width={360}
                            height={270}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </button>
                ))}
            </div>

            <dialog
                ref={dialog}
                onClose={() => setIndex(null)}
                onClick={(e) => e.target === dialog.current && dialog.current.close()}
                className="m-auto max-h-[92vh] max-w-[92vw] bg-transparent p-0 outline-none backdrop:bg-black/85"
            >
                {current && (
                    <figure className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`/gallery/full/${current.place}/${current.file}`}
                            alt={current.caption}
                            className="max-h-[84vh] max-w-[92vw] rounded-md object-contain"
                        />
                        <figcaption className="mt-3 text-center text-sm text-white/80">
                            {current.caption}
                        </figcaption>
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={() => dialog.current?.close()}
                            className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80"
                        >
                            <X className="size-5" />
                        </button>
                        <button
                            type="button"
                            aria-label="Previous photo"
                            onClick={() => step(-1)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80"
                        >
                            <ChevronLeft className="size-5" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next photo"
                            onClick={() => step(1)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80"
                        >
                            <ChevronRight className="size-5" />
                        </button>
                    </figure>
                )}
            </dialog>
        </>
    );
};

export default Gallery;
