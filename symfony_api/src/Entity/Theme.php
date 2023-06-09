<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ThemeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ThemeRepository::class)]
#[ApiResource()]
class Theme
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $theme = null;

    #[ORM\ManyToMany(targetEntity: Contests::class, inversedBy: 'themes')]
    private Collection $contests;

    public function __construct()
    {
        $this->contests = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTheme(): ?string
    {
        return $this->theme;
    }

    public function setTheme(string $theme): self
    {
        $this->theme = $theme;

        return $this;
    }

    /**
     * @return Collection<int, concours>
     */
    public function getContests(): Collection
    {
        return $this->contests;
    }

    public function addContests(Contests $contests): self
    {
        if (!$this->contests->contains($contests)) {
            $this->contests->add($contests);
        }

        return $this;
    }

    public function removeContests(Contests $contests): self
    {
        $this->contests->removeElement($contests);

        return $this;
    }
}
