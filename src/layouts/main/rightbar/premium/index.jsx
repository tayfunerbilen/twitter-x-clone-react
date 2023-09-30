import Button from "~/components/button";

export default function Premium() {
	return (
		<section
			className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5"
		>
			<h6 className="text-xl leading-6 font-extrabold">Premium'a Abone Ol</h6>
			<p className="leading-5 font-bold">
				Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
			</p>
			<div className="self-start">
				<Button>Abone ol</Button>
			</div>
		</section>
	)
}
