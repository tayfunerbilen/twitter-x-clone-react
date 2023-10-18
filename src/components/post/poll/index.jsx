import {useState} from "react";

export default function Poll({poll: pollData}) {

	const [poll, setPoll] = useState(pollData)

	return (
		<div className="mt-3 grid gap-1">
			{!poll.voted && poll.answers.map((answer) => (
				<button
					onClick={() => {
						setPoll({
							...poll,
							voted: true,
							votes: poll.votes + 1,
							answers: poll.answers.map(a => {
								if (a.id === answer.id) {
									return {
										...a,
										votes: a.votes + 1,
										voted: true
									}
								}
								return a
							})
						})
					}}
					className="h-8 border border-[color:var(--color-primary)] rounded-full text-[color:var(--color-primary)] font-bold hover:bg-[color:var(--color-primary-alpha)] transition-colors"
					key={answer.id}
				>
					{answer.text}
				</button>
			))}
			{poll.voted && poll.answers.map((answer) => (
				<div className="h-8 flex items-center justify-between relative overflow-hidden rounded-md px-2 z-[1]">
					<div
						style={{width: ((answer.votes / poll.votes) * 100) + '%'}}
						className="absolute top-0 left-0 h-full bg-[color:var(--color-base-secondary)] opacity-50 z-[-1]"
					/>
					<div className="flex items-center gap-0.5">
						{answer.text}
						{answer?.voted && (
							<svg viewBox="0 0 24 24" className="h-[1.25rem]" fill="currentColor">
								<path
									d="M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16.4 9.28l-5.21 7.15-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18z"
								/>
							</svg>
						)}
					</div>
					<div>{((answer.votes / poll.votes) * 100).toFixed(1) + '%'}</div>
				</div>
			))}

			<div className="text-[color:var(--color-base-secondary)] mt-2">
				{poll.votes} oy · 6 gün kaldı
			</div>
		</div>
	)
}
