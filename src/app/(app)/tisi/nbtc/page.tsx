"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BusinessLinePage } from "@/components/dashboard/business-line-page";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "tisi-main", label: "TISI认证", href: "/tisi" },
  { key: "nbtc", label: "NBTC认证", href: "/tisi/nbtc" },
];

export default function NbtcPage() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-light tracking-tight text-[var(--foreground)]" style={{ textWrap: "balance" }}>NBTC</h1>
        <p className="mt-1.5 text-sm text-[var(--muted-foreground)] leading-relaxed">
          泰国广播和电信委员会认证，无线电/通信设备进泰国市场的强制要求。流程和TISI类似，这套转Fern来盯。
        </p>
      </div>

      <div className="flex flex-wrap gap-1 rounded-lg border border-[var(--border)] bg-[var(--muted)] p-1">
        {tabs.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            className={cn(
              "rounded-md px-3.5 py-1.5 text-sm font-medium transition-all",
              tab.key === "nbtc"
                ? "bg-[var(--background)] text-[var(--foreground)] shadow-sm"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <BusinessLinePage
        businessKey="TISI"
        label="NBTC认证"
        accentHue={240}
        description="NBTC认证流程和TISI几乎一模一样，12步走完，Fern一个人盯下来。最磨人的还是等检测结果那30-60天。"
        subServiceType="nbtc"
      />
    </div>
  );
}
