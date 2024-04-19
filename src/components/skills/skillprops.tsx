import React from "react";

type SkillProps = {
    skillname: string
    progress_pct: string
    progress: string
    tooltip: string
}

export default function SkillProps({ skillname, progress_pct, progress, tooltip }: SkillProps) {
    return (
        <div className="relative py-4 px-6 max-w-sm mx-auto">
            <div className="flex mb-2 items-center justify-between">
                <div className="tooltip tooltip-right" data-tip={tooltip}>
                    <span className="font-semibold inline-block py-1 px-2 rounded-full text-slate-600 bg-white shadow">
                        {skillname}
                    </span>
                </div>
                <div className="text-right">
                    <span className="font-semibold inline-block">
                        {progress_pct}
                    </span>
                </div>
            </div>
            <progress className="progress progress-accent max-w-sm" value={progress} max="100"></progress>
        </div>
    )
}