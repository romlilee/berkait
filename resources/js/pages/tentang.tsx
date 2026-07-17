import { Head } from '@inertiajs/react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

interface Props {
    data: {
        nama_tambak: string;
        alamat: string;
        total_kolam: number;
        total_produksi: number;
        total_nilai_wajar: number;
    };
}

export default function Tentang({
    data,
}: Props) {

    const rupiah = (value: number) =>
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);

    return (
        <>
            <Head title="Tentang Tambak" />

            <Navbar />

            <div className="bg-slate-50 py-20">

                <div className="mx-auto max-w-6xl px-6">

                    <div className="rounded-3xl bg-white p-10 shadow-sm">

                        <h1 className="text-4xl font-bold">
                            Tentang Tambak
                        </h1>

                        <p className="mt-4 text-slate-600">
                             CV. Berkat Samudra Biru merupakan perusahaan yang bergerak di bidang budidaya udang dengan komitmen menghasilkan produk berkualitas melalui pengelolaan tambak yang efektif dan berkelanjutan. Dalam mendukung kegiatan operasional, perusahaan memanfaatkan sistem informasi berbasis web untuk membantu pengelolaan data tambak, pencatatan transaksi keuangan, pemantauan stok udang, serta penyajian informasi kepada masyarakat.
                        </p>

                        <p className="mt-4 text-slate-600">
                            Melalui website ini, masyarakat dapat memperoleh informasi mengenai ketersediaan stok udang secara lebih mudah. Apabila berminat melakukan pembelian, pengguna dapat langsung menghubungi pihak perusahaan melalui kontak WhatsApp yang tersedia.
                        </p>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">

                            <div className="rounded-2xl bg-slate-50 p-6">
                                <div className="text-sm text-slate-500">
                                    Total Kolam
                                </div>

                                <div className="mt-2 text-4xl font-bold">
                                    {data.total_kolam}
                                </div>
                            </div>

                            <div className="rounded-2xl bg-slate-50 p-6">
                                <div className="text-sm text-slate-500">
                                    Total Produksi
                                </div>

                                <div className="mt-2 text-4xl font-bold">
                                    {Number(
                                        data.total_produksi
                                    ).toLocaleString()}
                                    Kg
                                </div>
                            </div>

                            <div className="rounded-2xl bg-slate-50 p-6">
                                <div className="text-sm text-slate-500">
                                    Nilai Wajar
                                </div>

                                <div className="mt-2 text-xl font-bold text-green-600">
                                    Rp ********
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}