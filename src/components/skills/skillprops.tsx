import React from "react";

type SkillProps = {
    skillname: string
    progress_pct: string
    progress: string
    tooltip: string
}

export default function SkillProps({ skillname, progress_pct, progress, tooltip }: SkillProps) {
    return (
        <div className="relative mx-auto max-w-sm px-6 py-4">
            <div className="mb-2 flex items-center justify-between">
                <div className="tooltip tooltip-right text-slate-50" data-tip={tooltip}>
                    <span className="inline-block rounded-full bg-white px-2 py-1 font-semibold text-slate-600 shadow">
                        {skillname}
                    </span>
                </div>
                <div className="text-right">
                    <span className="inline-block font-semibold text-slate-900">
                        {progress_pct}
                    </span>
                </div>
            </div>
            <progress className="progress progress-accent max-w-sm" value={progress} max="100"></progress>
        </div>
    )
}