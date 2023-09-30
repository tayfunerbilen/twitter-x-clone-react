import Button from "~/components/button";
import {useState} from "react";

export default function UserCard({user}) {

	const [following, setFollowing] = useState(false)

	return (
		<button className="py-3 px-4 flex gap-3 transition-colors hover:bg-[color:var(--background-third)]">
			<div className="flex-1 flex gap-3">
				<img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt=""/>
				<div className="w-[calc(100%-3.25rem)] text-left">
					<div className="leading-5 font-bold truncate">
						{user.fullName}
					</div>
					<div className="text-[color:var(--color-base-secondary)] truncate">@{user.username}</div>
				</div>
			</div>
			<div>
				{following ? (
					<Button
						variant="white-outline"
						size="small"
						onClick={() => setFollowing(false)}
						className="whitespace-nowrap group"
					>
						<div className="flex group-hover:hidden">Takip ediliyor</div>
						<div className="hidden group-hover:flex">Takibi bırak</div>
					</Button>
				) : (
					<Button variant="white" size="small" onClick={() => setFollowing(true)}>
						Takip et
					</Button>
				)}
			</div>
		</button>
	)
}
